import request from "./Instance";


const Services = {
  async getAll() {
    const res = await request.get("/cars/");
    return res;
  },
};

export default Services;
