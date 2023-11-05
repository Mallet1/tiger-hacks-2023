import { db } from "@/lib/db";

// export const getOrCreateConversation = async (weight: number) => {
//   let weights = await findWeight(weight);

//   if (!weights) {
//     weights = await createNewConversation(memberOneId, memberTwoId);
//   }

//   return conversation;
// }

export const findWeight = async (weightParam: number) => {
  try {
    return await db.weights.findMany({
      where: {
        weight: weightParam
      }
    });
  } catch {
    return null;
  }
}

export const createNewWeight = async (weightParam: number) => {
  try {
    return await db.weights.create({
      data: {
        userId: new Date().toLocaleString('en-US', {
            dateStyle: 'short',
        }),
        date: new Date().toLocaleString('en-US', {
            dateStyle: 'short',
        }),
        weight: weightParam
      } 
    })
  } catch {
    return null;
  }
}