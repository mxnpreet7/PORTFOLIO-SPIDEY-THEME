import { StudentProfile, SkillItem, JourneyMilestone, Project } from '../types';

export const studentProfile: StudentProfile = {
  name: 'MANPREET SINGH',
  role: 'STUDENT DEVELOPER',
  year: '2nd Year CSE',
  college: 'Swami Vivekanand Institute of Engineering and Technology',
  collegeShort: 'SVIET',
  location: 'Chandigarh, India',
  bornYear: 2008,
  email: 'iammanpreet640@gmail.com',
  github: 'https://github.com/mxnpreet7',
  githubUsername: 'mxnpreet7',
  linkedin: 'https://www.linkedin.com/in/manpreet-singh-7063703b2/',
  tagline: "Building with code. Exploring AI. Creating what's next.",
  bio: "I am a 2nd-year Computer Science Engineering student passionate about building real-world web applications and diving deep into computational fundamentals and artificial intelligence.",
  quote: "I love building web applications and exploring new technologies, especially in artificial intelligence."
};

export const skillsData: SkillItem[] = [
  {
    id: 'c',
    name: 'C',
    category: 'core-languages',
    level: 'Developing',
    experienceDesc: 'Structured procedural programming, memory allocations, pointer arithmetic, and fundamental algorithmic logic.',
    codeSnippet: `#include <stdio.h>

int main() {
    char node[] = "Spider-Grid";
    printf("Connecting to node: %s\\n", node);
    return 0;
}`,
    iconName: 'Terminal',
    colorAccent: '#E22424',
    topics: ['Pointers & Memory', 'Data Structures', 'Procedural Logic', 'Algorithm Complexity']
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'core-languages',
    level: 'Developing',
    experienceDesc: 'Object-Oriented Programming principles, classes, inheritance, Standard Template Library (STL), and efficient problem solving.',
    codeSnippet: `#include <iostream>
#include <vector>

class WebNode {
public:
    std::string id;
    WebNode(std::string name) : id(name) {}
    void pulse() { std::cout << "Node " << id << " active\\n"; }
};`,
    iconName: 'Code2',
    colorAccent: '#E22424',
    topics: ['OOP Architecture', 'STL Vectors & Maps', 'Encapsulation', 'Problem Solving']
  },
  {
    id: 'python',
    name: 'Python',
    category: 'core-languages',
    level: 'Developing',
    experienceDesc: 'Clean scripting, data manipulation, algorithm implementations, automation scripts, and exploring basic AI/ML models.',
    codeSnippet: `def explore_intelligence(model_name: str):
    capabilities = ["NLP", "Computer Vision", "Agentic Logic"]
    return {
        "status": "active_learning",
        "focus": model_name,
        "domains": capabilities
    }`,
    iconName: 'Cpu',
    colorAccent: '#3B82F6',
    topics: ['AI & ML Foundations', 'Automation Scripts', 'Data Structures', 'Modern Python 3']
  },
  {
    id: 'java',
    name: 'Java',
    category: 'core-languages',
    level: 'Familiar',
    experienceDesc: 'Core Java OOP concepts, abstraction, interfaces, JVM architecture, and structured application design.',
    codeSnippet: `public class Main {
    public static void main(String[] args) {
        System.out.println("Building scalable systems with Java.");
    }
}`,
    iconName: 'Layers',
    colorAccent: '#E22424',
    topics: ['Object-Oriented Design', 'Java Collections', 'Interfaces & Classes', 'JVM Ecosystem']
  },
  {
    id: 'html-css',
    name: 'HTML5 & CSS3',
    category: 'web-technologies',
    level: 'Comfortable',
    experienceDesc: 'Semantic document structure, modern Flexbox & CSS Grid layouts, responsive typography, media queries, and aesthetic styling.',
    codeSnippet: `<section class="spider-container">
  <div class="web-mesh-layer">
    <h1 class="text-gradient">Crafting User Interfaces</h1>
  </div>
</section>`,
    iconName: 'Layout',
    colorAccent: '#E22424',
    topics: ['Semantic Markup', 'Modern CSS Grid & Flexbox', 'Responsive Design', 'Glassmorphism & Shadows']
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'web-technologies',
    level: 'Developing',
    experienceDesc: 'Modern ES6+ syntax, DOM manipulation, asynchronous programming with Fetch/Promises, and interactive component state.',
    codeSnippet: `const triggerSpiderSense = async (coordinates) => {
  const radarWave = await renderRipple(coordinates);
  radarWave.animate({ opacity: [1, 0], scale: [0.8, 2.2] });
};`,
    iconName: 'Sparkles',
    colorAccent: '#F59E0B',
    topics: ['ES6+ Syntaxes', 'DOM Events & Animation', 'Async / Await API Calls', 'Interactive Interfaces']
  }
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: '2008',
    title: 'Origin Point',
    subtitle: 'Born with an early curiosity for science and technology',
    description: 'Developed an early fascination with computing systems, digital creativity, and how software powers the modern world.',
    status: 'completed',
    icon: 'Sparkle',
    tags: ['Curiosity', 'Origin']
  },
  {
    year: 'CSE Journey',
    title: 'Computer Science & Engineering',
    subtitle: 'Admitted to SVIET, Chandigarh',
    description: 'Enrolled in B.Tech Computer Science and Engineering at Swami Vivekanand Institute of Engineering and Technology to build strong academic roots.',
    status: 'completed',
    icon: 'GraduationCap',
    tags: ['CSE', 'SVIET', 'Undergrad']
  },
  {
    year: 'Foundations',
    title: 'Programming Foundations',
    subtitle: 'Deep dive into C, C++, Python, and Java',
    description: 'Mastered foundational computing paradigms: memory pointers, object-oriented principles, algorithms, and modular software design.',
    status: 'completed',
    icon: 'Code2',
    tags: ['C', 'C++', 'Python', 'Java']
  },
  {
    year: 'Web Craft',
    title: 'Web Development & Interfaces',
    subtitle: 'Building interactive applications',
    description: 'Applied knowledge to craft semantic, responsive web applications using HTML5, modern CSS architectures, and dynamic JavaScript logic.',
    status: 'in-progress',
    icon: 'Globe',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX']
  },
  {
    year: 'AI Exploration',
    title: 'Artificial Intelligence & Emerging Tech',
    subtitle: 'Exploring modern AI architectures',
    description: 'Actively exploring artificial intelligence, machine learning concepts, automated agents, and intelligent interactive user experiences.',
    status: 'in-progress',
    icon: 'Cpu',
    tags: ['Artificial Intelligence', 'Exploration', 'Innovation']
  },
  {
    year: 'Future',
    title: 'Evolving into a Full-Stack Engineer',
    subtitle: 'Continuous growth and high-impact engineering',
    description: 'Expanding engineering depth, collaborating on open-source repositories, and building production-grade software solutions.',
    status: 'future',
    icon: 'Rocket',
    tags: ['Software Engineering', 'Open Source', 'Future Tech']
  }
];

export const fallbackProjects: Project[] = [
  {
    id: 'portfolio-v1',
    name: 'mxnpreet7/portfolio',
    displayName: 'Cinematic Developer Portfolio',
    description: 'A production-grade personal portfolio built with modern responsive web technologies, Spider-Man visual motifs, and Apple-grade product layout.',
    language: 'TypeScript / React',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
    githubUrl: 'https://github.com/mxnpreet7',
    stars: 1,
    featured: true,
    highlights: [
      'Spider-Sense interactive canvas engine reacting to mouse movement',
      'Dynamic GitHub API integration for real-time repository updates',
      'Responsive design tuned for desktop, tablets, and mobile devices',
      'Apple product-card inspired 3D hover and detail view'
    ],
    whatILearned: [
      'Advanced CSS positioning, backdrop filters, and radial gradient blends',
      'Stateful interactive components with zero layout shifts',
      'Accessibility practices including reduced motion preferences and high contrast'
    ],
    architecture: 'Modular React component hierarchy with typed interfaces, custom responsive hooks, and performant requestAnimationFrame canvas graphics.'
  },
  {
    id: 'cpp-algorithms',
    name: 'mxnpreet7/core-algorithms',
    displayName: 'Core Algorithms & Data Structures in C++',
    description: 'Curated collection of fundamental data structures, search algorithms, sorting routines, and OOP implementations written in modern C++.',
    language: 'C++',
    tags: ['C++', 'STL', 'Algorithms', 'Data Structures'],
    githubUrl: 'https://github.com/mxnpreet7',
    stars: 0,
    featured: true,
    highlights: [
      'Object-oriented class structures and memory safe allocations',
      'Implementation of linked lists, stacks, queues, and tree traversal',
      'Algorithmic complexity analysis and benchmarking'
    ],
    whatILearned: [
      'Pointer arithmetic and reference memory in C/C++',
      'Standard Template Library vector and map performance',
      'Writing clean, self-documenting code in compiled languages'
    ],
    architecture: 'Standard modular header and source structure with unit test routines for data structures.'
  },
  {
    id: 'python-automation-ai',
    name: 'mxnpreet7/python-ai-experiments',
    displayName: 'Python AI & Automation Utilities',
    description: 'Practical Python scripts demonstrating algorithmic problem solving, file automation, API consumption, and explorations into machine learning.',
    language: 'Python',
    tags: ['Python', 'AI Exploration', 'Automation', 'APIs'],
    githubUrl: 'https://github.com/mxnpreet7',
    stars: 0,
    featured: true,
    highlights: [
      'Automated batch data processing and parsing scripts',
      'Integration with external RESTful endpoints',
      'Foundational exploration into machine learning and neural networks'
    ],
    whatILearned: [
      'Pythonic idioms, list comprehensions, and generator pipelines',
      'Working with JSON datasets and asynchronous web requests',
      'Understanding the fundamentals behind modern AI language models'
    ],
    architecture: 'Clean functional Python modules structured with type hints and virtual environment compatibility.'
  },
  {
    id: 'java-oop-systems',
    name: 'mxnpreet7/java-foundations',
    displayName: 'Java OOP Architecture Foundations',
    description: 'Enterprise-style Java exercises focusing on inheritance, polymorphism, abstract design patterns, and exception handling paradigms.',
    language: 'Java',
    tags: ['Java', 'OOP', 'Software Design', 'JVM'],
    githubUrl: 'https://github.com/mxnpreet7',
    stars: 0,
    featured: false,
    highlights: [
      'Multi-tiered class hierarchies applying SOLID design principles',
      'Robust error handling and custom exception frameworks',
      'Demonstration of collections framework and streams'
    ],
    whatILearned: [
      'Strongly typed modular design in JVM applications',
      'Separation of concerns between business logic and input/output',
      'Core Java standard library capabilities'
    ],
    architecture: 'Object-oriented Java package structure with clean interfaces and implementation classes.'
  }
];
