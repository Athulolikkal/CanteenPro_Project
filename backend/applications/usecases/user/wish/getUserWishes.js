export default async function getUserWishes(userId, wishDb) {
    try {

        const currentDate = new Date()
        const updateNoLongerWishes = await wishDb.noLongerWishes(userId,currentDate)
        const activeWishes = await wishDb.activeWishes(userId, currentDate)
        return activeWishes
    } catch (err) {
        console.log(err);
    }
}