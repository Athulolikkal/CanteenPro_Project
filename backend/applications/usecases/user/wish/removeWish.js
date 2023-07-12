export default async function removeWish(wishid, wishDb) {
    try {
        const item = wishDb.removeItembyId(wishid)
        return item
    } catch (err) {
        console.log(err);
    }
}