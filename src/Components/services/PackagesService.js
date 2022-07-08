import GenericService from "./GenericService";
class PackagesService extends GenericService {
  constructor() {
    super();
  }
  addPackage= (data) => this.post("packages", data);
  deletePackage= (_id) => this.delete("packages/" + _id);
  updatePackage= (_id, data) => this.put("packages/" + _id, data);
  getPackages = () => this.get("packages");
  getSinglePackage= (id) => this.get("packages/" + id);
}

let packageservice = new PackagesService();
export default packageservice;