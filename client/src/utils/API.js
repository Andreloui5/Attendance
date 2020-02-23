import axios from "axios";

export default {
  //REQUESTS FOR EVENTS

  //finds all events by Keyword
  findByKeyword: function(keyword) {
    return axios.get("/api/events/keyword/" + keyword);
  },
  // finds a specific event
  findEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
  // deletes an event
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // saves an event with data from the form
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  },

  //REQUESTS FOR PEOPLE

  // finds a specific person
  findPerson: function(id) {
    return axios.get("/api/people/" + id);
  },
  // deletes a person
  deletePerson: function(id) {
    return axios.delete("/api/people/" + id);
  },
  // saves a person with data from the form
  savePerson: function(personData) {
    return axios.get("/api/people", personData);
  }
};
