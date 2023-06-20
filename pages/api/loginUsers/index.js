import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
    
    const { user, password } = req.query;
    console.log("Incoming query parameters: ", req.query);
    try {
      const validate = await getValidate(user, password);
      console.log(`provide access: ${validate}`);
      res.status(200).json(validate);
    } catch (error) {
      console.error(`Error while validating user: ${error}`);
      res.status(500).json({ error: "Error validating user." });
    }
} 


async function getValidate( user,password ) {
     
    console.log(`Query condition: email:${user}`);

    const userFound = await prisma.user.findUnique({
        where: {email: user}
    });
  
    
    
    if (!userFound) return {response: "User not found"};
    else return userFound.password !== password 
        ? {response: "Your username or password are incorrect"} 
        : {
            response: "Access granted", 
            userData:{
              id: userFound.id,
              name: `${userFound.name} ${userFound.lastname}`,
              user: userFound.username,
              email: userFound.email,
              seniority: userFound.seniority,
              image: userFound.profile_pictures,
        }}; ;
}
