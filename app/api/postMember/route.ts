import { NextRequest, NextResponse } from 'next/server';
import { SignJWT } from 'jose';

export const runtime = 'edge'; // Explicitly specify Edge Runtime

function hexStringToUint8Array(hexString: string): Uint8Array {
  if (hexString.length % 2 !== 0) {
    throw new Error('Invalid hex string');
  }
  const array = new Uint8Array(hexString.length / 2);
  for (let i = 0; i < hexString.length; i += 2) {
    array[i / 2] = parseInt(hexString.substr(i, 2), 16);
  }
  return array;
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    const apiUrl = 'https://halal-defi.ghost.io/ghost/api/admin/members/';
    const adminApiKey = "670ccadc98bd610001afa104:16d452c8d7fb5bf0e8b30ec5552db9ed163797f4748b768e5e72fc1a92981781";
    const [keyId, secret] = adminApiKey.split(':');

    // Convert the secret from hex string to Uint8Array
    const secretKey = hexStringToUint8Array(secret);

    // Create a JWT token using jose
    const iat = Math.floor(Date.now() / 1000);

    const token = await new SignJWT({})
      .setProtectedHeader({ alg: 'HS256', kid: keyId })
      .setIssuedAt(iat)
      .setExpirationTime(iat + 5 * 60) // Expires in 5 minutes
      .setAudience('/admin/')
      .sign(secretKey);

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Ghost ${token}`,
    };

    const memberData = {
      members: [
        {
          email: email,
        },
      ],
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(memberData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(data.errors);
      return NextResponse.json(
        { success: false, errors: data.errors },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error('Error in POST /api/postMember:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
