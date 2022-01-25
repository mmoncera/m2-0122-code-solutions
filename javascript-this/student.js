/* exported student */

var student = {
  firstName: 'Michael',
  lastName: 'Moncera',
  subject: 'JavaScript',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  getIntroduction() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am studying ${this.subject}.`;
  }
};
