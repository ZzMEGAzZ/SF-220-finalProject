import { writable } from "svelte/store";
import { persistStore } from "./persistStore";

const default_data = {
  test: {
    name: "นายภาณุวัฒน์ มั่งคั่ง",
    password: "test",
    id: 6410742057,
    role: "student",
    group: "วิศวกรรมศาสตร์",
    year: "2564",
    sub: ["SF210"],
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
  $: {
    name: "นางสาวศศิภา บุญอุ้มชู",
    password: "$",
    id: 6410742511,
    role: "admin",
    group: "วิศวกรรมศาสตร์",
    year: "2564",
    sub: [],
    image: "https://i1.sndcdn.com/avatars-000600452151-38sfei-t500x500.jpg",
  },
  e: {
    name: "นางสาวณพัชสินี พวงบุบผา",
    password: "e",
    id: 6410742354,
    role: "admin",
    group: "วิศวกรรมศาสตร์",
    year: "2564",
    sub: [],
    image:
      "https://i.pinimg.com/564x/10/db/43/10db43f94fd4d2ef167db304c4eee343.jpg",
  },
  spy: {
    name: "นางสาวภัทรดา มิโคทะ",
    password: "12345",
    id: 6410742099,
    role: "student",
    group: "วิศวกรรมศาสตร์",
    year: "2564",
    sub: [],
    image: "https://media.discordapp.net/attachments/952656330546614334/965273780169605191/4CB7BF95-D023-4AE1-BE7E-B7E5061B4E81.jpg?width=410&height=410",
  },
};

const data = [
  {
    name: "SF210",
    subject: "Programming Skill Development 1",
    total: 30,
    register: 1,
    remaining: 29,
    credit: 3,
    Teacher: "Weerachai anotaipaiboon",
    short_description: "Software Engineer",
    description:
      "จัดสอนโดย Assoc. Prof. Dr. Weerachai anotaipaiboon สำหรับนักศึกษา Software Engineer",
  },
  {
    name: "SF220",
    subject: "Introduction to software engineering",
    total: 30,
    register: 0,
    remaining: 30,
    credit: 3,
    Teacher: "Weerachai anotaipaiboon",
    short_description: "Software Engineer",
    description: "สำหรับนักศึกษา Software Engineer",
  },
  {
    name: "SF230",
    subject: "Linear Algebra and Numerical Methods for Computer Engineering",
    total: 30,
    register: 0,
    remaining: 30,
    credit: 3,
    Teacher: "Weerachai anotaipaiboon",
    short_description: "Software Engineer",
    description: "สำหรับนักศึกษา Software Engineer",
  },
  {
    name: "TU107",
    subject: "Digital skill and Problem Solving",
    total: 100,
    register: 0,
    remaining: 100,
    credit: 3,
    Teacher: "Weerachai anotaipaiboon",
    short_description: "Software Engineer",
    description: "สำหรับนักศึกษา Software Engineer",
  },
  {
    name: "TU109",
    subject: "Innovation and entrepreneurial mindset",
    total: 100,
    register: 0,
    remaining: 100,
    credit: 3,
    Teacher: "Thanapath Cheeranawanith",
    short_description: "Software Engineer",
    description: "สำหรับนักศึกษา All Section",
  },
  {
    name: "TU105",
    subject: "Communication skills in English",
    total: 3,
    register: 0,
    remaining: 3,
    credit: 3,
    Teacher: "Kriengkrai Sakulprasertsri",
    short_description: "Software Engineer",
    description:
      "จัดสอนโดย Prof. Kriengkrai Sakulprasertsri สำหรับนักศึกษา Software Engineer ที่มีคะเเนน o-net ตามเกณฑ์",
  },
  {
    name: "TU050",
    subject: "English Skill Development",
    total: 10,
    register: 0,
    remaining: 10,
    credit: 3,
    Teacher: "Kriengkrai Sakulprasertsri",
    short_description: "Software Engineer",
    description:
      "จัดสอนโดย Prof. Kriengkrai Sakulprasertsri สำหรับนักศึกษา Software Engineer ที่มีคะเเนน o-net ตามเกณฑ์",
  },
];

export const accounts = persistStore("accounts", default_data);
export const subjects = persistStore("subjects", data);
export const islogin = writable(false);
export const mode = writable("");
export const account = writable("");
export const sub = persistStore("sub", "");
