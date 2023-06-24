import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    
    const { email, password } = req.body;
    console.log("Incoming body parameters: ", req.body);
    try {
      const validate = await getValidate(email, password);
      console.log(`provide access: ${validate}`);
      res.status(200).json(validate);
    } catch (error) {
      console.error(`Error while validating user: ${error}`);
      res.status(500).json({ error: "Error validating user." });
    }
} 


async function getValidate( email,password ) {
     
    console.log(`Body condition: email:${email}`);

    const userFound = await prisma.user.findUnique({
        where: {email: email}
    });
     
    if (!userFound) return {response: "User not found"};
    else return await compare(password, userFound.password)
        ? {
            response: "Access granted", 
            userData:{
              id: userFound.id,
              name: `${userFound.name} ${userFound.lastname}`,
              user: userFound.username,
              email: userFound.email,
              seniority: userFound.seniority,
              image: userFound.profile_pictures,
          }}
        : {response: "Your email or password are incorrect"} ; 
}
