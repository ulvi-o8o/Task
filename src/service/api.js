import axios from "axios";

export class UserService {
  async getUsers(payload) {
    const searchParams = new URLSearchParams();

    if (!!payload.username) {
      searchParams.append("username", payload.username);
    }
    const baseUrl = new URL("");
    baseUrl.search = searchParams.toString();

    return await axios({
      url: baseUrl.toString(),
      method: "GET ",
    });
  }
}
