import http from '../http-common';

class TutorialDataService {
    getAll() {
        return http.get('/tutorials');
    }
    get(id) {
        return http.get(`/tutorials/${id}`);
    }
    create(data) {
        return http.get('/tutorials', data);
    }
}