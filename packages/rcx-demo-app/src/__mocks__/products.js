import { v4 as uuid } from 'uuid';

export const products = [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description:
      'Creative writing classes aren’t for everyone, but I included this example to encourage all students to take a class that tests your creative side.',
    media: '/assets/writing.png',
    title: 'Creative Writing: Fiction',
    totalDownloads: '594',
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description:
      'Programming class based on informatics applications. It’s a little more beginner-friendly than an introductory electrical engineering and computer science (EECS) course because Python is the primary programming language used.',
    media: '/assets/programming.png',
    title: 'Programs, Information and People',
    totalDownloads: '625',
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description:
      'Sustainability applications within business is a trending topic, and being familiar with the terminology used within sustainable business is useful for people going into any career.',
    media: '/assets/business-environment.png',
    title: 'Business and the Environment',
    totalDownloads: '857',
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description:
      'Learn about the friendly (or not so friendly) giants that roamed our earth thousands of years ago. This class might only be one credit, but it’s an easy course to get an extra natural science credit in!',
    media: '/assets/dinosaur.png',
    title: 'Dinosaurs and Other Failures',
    totalDownloads: '406',
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description:
      'Another fun course to get a natural science credit in is this mini-course about Aliens. You’ll learn about the theories regarding extra terrestrials and whether they’ve walked on Earth, or whether they ever will.',
    media: '/assets/alien.png',
    title: 'Aliens',
    totalDownloads: '835',
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description:
      'An interesting class where students learn about four specific policy areas by different professors who are experts in each area. Past topics include: copyright policy, health policy (the Flint water crisis), education policy, and voting policy.',
    media: '/assets/problem.png',
    title: 'Systematic Thinking about the Problems of the Day',
    totalDownloads: '835',
  },
];
