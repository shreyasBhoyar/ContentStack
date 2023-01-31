const employees = [
    {
      id: "1",
      name: "Vibhuti Bajaj",
      profileImage: "assets/images/Vibhuti.jpg",
      introduction:
        "I like playing cricket and travelling. I'm always focused on the task which I take at hand.",
      profileLink: "https://vibhi24.github.io/Personal-Website/",
    },
    {
      id: "2",
      name: "Varun Athreya",
      profileImage: "assets/images/varun.jpg",
      introduction:
        "I am a passionate coder who loves capturing memories and exploring new places.",
      profileLink: "https://varunsathreya.github.io/contentstack-training/",
    },
    {
      id: "3",
      name: "Priya NB",
      profileImage: "assets/images/Priya.jpeg",
      introduction:
        "I'm enthusiastic to learn new things and I don't give up until i achieve it.",
      profileLink: "https://priya-nb.github.io/personalweb/index.html",
    },
    {
      id: "4",
      name: "Rangaswamy Vikas",
      profileImage: "assets/images/vikas.jpg",
      introduction:
        "I enjoy balancing my love for learning with my passion for gaming and a fit lifestyle.",
      profileLink: "https://vikasrangaswamy.github.io/portfolio/main.html",
    },
    {
      id: "5",
      name: "Deepak Chaturvedi",
      profileImage: "assets/images/deepak.png",
      introduction:
        "Believer, Dedicated. I am a curious developer that loves to convert ideas into code.",
      profileLink: "https://thedeepakchaturvedi.github.io/Portfolio/",
    },
    {
      id: "6",
      name: "Rakshitha S",
      profileImage: "assets/images/Rakshitha.jpg",
      introduction:
        "I'm passionate to meet people, learn new things. I love challenges and interested in travelling.",
      profileLink: "#",
    },
    {
      id: "7",
      name: "Kashmeera Raychoty",
      profileImage: "assets/images/Kashmeera.jpg",
      introduction: "I am a creative person and like to explore new things.",
      profileLink: "https://kashmeeraraychoty.github.io/Kashmeera-s-Portfolio/",
    },
    {
      id: "8",
      name: "Harshitha D",
      profileImage: "assets/images/Harshitha D.png",
      introduction: "I'm a partical person and like to travel and listen K-pop.",
      profileLink: "https://harshithad0703.github.io/individual_website/",
    },
    {
      id: "9",
      name: "Sanika Pareek",
      profileImage: "assets/images/sanika.jpeg",
      introduction:
        "I'm curious to learn and explore new things and like to paint.",
      profileLink:
        "https://sanikapareek-contentstack.github.io/sanika-portfolio/",
    },
    {
      id: "9",
      name: "Raj Pandey",
      profileImage: "assets/images/Raj.png",
      introduction: "Computer Engineer, Painter, Poet, Reader",
      profileLink: "https://cs-raj.github.io/pw-2/",
    },
    {
      id: "10",
      name: "Viraj Yadav",
      profileImage: "assets/images/Viraj.jpg",
      introduction:
        "I'm a sincere lunatic curious about technology and like playing cricket.",
      profileLink: "https://vikasrangaswamy.github.io/Contentstack/#",
    },
    {
      id: "11",
      name: "Faraaz Biyabani",
      profileImage: "assets/images/faraaz.webp",
      introduction:
        "I am always curious about technology and I love writing code to create purposeful things.",
      profileLink: "https://faraazb.github.io/cs-personal-website/",
    },
    {
      id: "12",
      name: "Vaibhav Patil",
      profileImage: "assets/images/Vaibhav.png",
      introduction:
        "I'm a true technophile. I love to talk about Physics and Spirituality.",
      profileLink: "https://vaibhav-patil07.github.io/portfolio/#",
    },
    {
      id: "13",
      name: "Soumik Paul",
      profileImage: "assets/images/Soumik.png",
      introduction: "2x ICPC regionalist and first runner-up at Techsurf 2022.",
      profileLink: "https://soumik43.github.io/Portfolio/",
    },
  ];

  class Employee{
    constructor(id,name,profileImage,introduction,profileLink){
        this.id = id;
        this.name = name;
        this.profileImage=profileImage;
        this.introduction = introduction;
        this.profileLink = profileLink;

    }
  }

let newEmp = []
employees.forEach((employee)=>{
    let instance = new Employee(employee.id,employee.name,employee.profileImage,employee.introduction,employee.profileLink)
    newEmp.push(instance);
})

let findEmployeeById = (id)=>{
   const result =  newEmp.find((emp)=>{
        return emp.id===id;
    })
    if(result)return result;
    else return "Not Found";
    
}

let findEmployee = (obj) =>{
    key = Object.keys(obj)[0]
    value =  Object.values(obj)[0]
   const result =  newEmp.find((emp)=>{
        return emp[key] === value;
    })
    if(result)return result;
    else return "Not Found";
}

let deleteById = (id)=>{
    let entry = findEmployeeById(id);
    let index = newEmp.indexOf(entry);
    if(index>-1){
        newEmp.splice(index,1);
    }
    return newEmp;
}

let updateEmployeeById = (id,updatedValues)=>{
    let entry = findEmployeeById(id);
    let oldEntry = entry;
    if(Object.keys(updatedValues).includes("id")){
        delete updatedValues.id;
    }
    key = Object.keys(updatedValues)
    value =  Object.values(updatedValues)

    for(i=0;i<key.length;i++){
        entry[key[i]] = value[i]
    }
    let index = newEmp.indexOf(oldEntry);

    newEmp[index] = entry;
    return newEmp;
}

// console.log(findEmployeeById("1"));
// console.log(findEmployee({ "id": '1'}));
// console.log("new Data",updateEmployeeById("1",{"id":"5","name":"shreyas"}))
// console.log(deleteById("2"))