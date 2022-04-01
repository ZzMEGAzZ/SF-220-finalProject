import { writable } from "svelte/store";

let data = {
  test: {
    name: "นายภาณุวัฒน์ มั่งคั่ง",
    password: "test",
    id: 6410742057,
    role: "student",
    group: "วิศวกรรมศาสตร์",
    year: "2564",
    sub: ["subject2"],
    image:
      "https://s.isanook.com/ca/0/ui/279/1396205/s__152616986_1562561122.jpg",
  },
  admin: {
    name: "นายอภิสิทธิ์ แสงกระจ่าง",
    password: "admin",
    id: 6410742016,
    role: "admin",
    group: "วิศวกรรมศาสตร์",
    year: "2564",
    sub: [],
    image: "https://i1.sndcdn.com/avatars-000600452151-38sfei-t500x500.jpg",
  },
};

let data2 = [
  { name: "subject1", total: 10, register: 0, remaining: 10 },
  { name: "subject2", total: 5, register: 1, remaining: 4 },
];

export const accounts = writable(data);
export const islogin = writable(false);
export const mode = writable("");
export const account = writable("");
export const subjects = writable(data2);
