"use server";

import jwt from "jsonwebtoken";

export async function postMember(email) {
  const apiUrl = "https://halal2defi.ghost.io/ghost/api/admin/members/";
  const adminApiKey =
    "671b6081232df7000139da72:344ba98c33760c3f855d2af703d108c64e78514690d569ff1efef28fa4036df7";
  const [keyId, secret] = adminApiKey?.split(":");

  

  const token = jwt.sign({}, Buffer.from(secret, "hex"), {
    keyid: keyId,
    algorithm: "HS256",
    expiresIn: "5m",
    audience: "/admin/",
  });

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Ghost ${token}`
  };

  const memberData = {
    members: [
      {
        email: email,
      }
    ]
  };

  const postsResponse = await fetch(apiUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(memberData),
  }).then(async function (res) {
    const status = res.status;
    const data = await res.json();
    return { data, status };
  });

  if (postsResponse.status != 200) {
    console.log(postsResponse.data.errors);
    return [];
  }

  return postsResponse;
}
