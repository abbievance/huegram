import HueObject from "./HueObject";

interface userProfileObject {
    username: string,
    likes: number,
    hues: HueObject[],
}

export default userProfileObject