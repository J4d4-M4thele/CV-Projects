import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("http://localhost:8080/tutorials");
  }

  get(id) {
    return http.get(`http://localhost:8080/tutorials/${id}`);
  }

  create(data) {
    return http.post("http://localhost:8080/tutorials", data);
  }

  update(id, data) {
    return http.put(`http://localhost:8080/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`http://localhost:8080/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`http://localhost:8080/tutorials`);
  }

  findByTitle(title) {
    return http.get(`http://localhost:8080/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();