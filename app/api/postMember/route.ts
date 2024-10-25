import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    const apiUrl = 'https://halal-defi.ghost.io/ghost/api/admin/members/';
    const adminApiKey =
      '670ccadc98bd610001afa104:16d452c8d7fb5bf0e8b30ec5552db9ed163797f4748b768e5e72fc1a92981781';
    const [keyId, secret] = adminApiKey.split(':');

    const token = jwt.sign({}, Buffer.from(secret, 'hex'), {
      keyid: keyId,
      algorithm: 'HS256',
      expiresIn: '5m',
      audience: '/admin/',
    });

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
      return NextResponse.json({ success: false, errors: data.errors }, { status: response.status });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error in POST /api/postMember:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
