export const caseStudies = {
  studydump: {
    lead: 'A subject-first home for the material students need throughout a semester.',
    sections: [
      {
        id: 'context', type: 'narrative', label: 'Context / Problem',
        title: 'Useful material, scattered everywhere.',
        paragraphs: [
          'Notes, syllabi, handouts, question banks and previous papers can end up across WhatsApp messages, Drive links, PDFs and old chats. The material exists, but finding the right file at the right moment becomes its own task.',
          'StudyDump was shaped around that access problem: give academic resources one organized place and make the path to a useful document easy to understand.',
        ],
      },
      { id: 'principle', type: 'statement', text: 'Finding the right resource was often harder than studying it.' },
      {
        id: 'approach', type: 'features', label: 'Approach / Information architecture',
        title: 'Start with the subject. Then narrow the search.',
        intro: 'The structure groups material by subject and resource type so students can browse deliberately or search when they know what they need.',
        items: [
          { title: 'Subject-wise organization', description: 'Notes, syllabi and course handouts sit in a predictable academic structure.' },
          { title: 'Resource discovery', description: 'Question banks, practical and lab material, previous papers and useful PDFs can be found through browsing and search.' },
          { title: 'Responsive access', description: 'The interface is designed for the devices students use between classes or while studying.' },
        ],
      },
      {
        id: 'experience', type: 'narrative', label: 'Experience', title: 'Clarity before complexity.',
        paragraphs: [
          'The product puts resource names and hierarchy ahead of decoration. Search supports direct retrieval, while the subject structure gives people a way to explore when they are less certain of the file name.',
          'The aim is practical use: shorter paths to relevant material and a layout that remains legible on smaller screens.',
        ],
      },
      { id: 'interface', type: 'media', label: 'Interface study', title: 'Resource discovery', caption: 'Approved StudyDump interface imagery will be added here.' },
      {
        id: 'development', type: 'narrative', label: 'Development', title: 'A deliberately lightweight foundation.',
        paragraphs: [
          'StudyDump uses HTML5, vanilla CSS and vanilla JavaScript with ES modules. A client-side architecture keeps the project straightforward to deploy, maintain and extend without adding a backend that the resource experience does not require.',
          'The technical choice serves the product: quick access, simple upkeep and room to refine the resource structure as needs become clearer.',
        ],
      },
      {
        id: 'reflection', type: 'narrative', label: 'Reflection', title: 'The value is in the organization.',
        paragraphs: ['StudyDump demonstrates how product thinking and information architecture can make existing content more useful. Usage and outcome data have not been published, so this case study documents the problem, design direction and implementation rather than claiming measured impact.'],
      },
    ],
  },
  'chitkara-student-portal-redesign': {
    lead: 'Making a busy student portal easier to scan, prioritize and use.',
    sections: [
      {
        id: 'context', type: 'narrative', label: 'Context / Problem', title: 'Important information competed for attention.',
        paragraphs: [
          'The existing portal experience felt difficult to scan and understand. A student opening the dashboard needed to work out what mattered now, what was coming next and where to go for routine information.',
          'This independent redesign explored a clearer hierarchy rather than adding more dashboard decoration.',
        ],
      },
      {
        id: 'approach', type: 'features', label: 'Approach / Priorities', title: 'Bring the day forward.',
        intro: 'The dashboard concept groups information by the decisions a student is likely to make during the day.',
        items: [
          { title: 'What is next', description: 'Daily priorities, timetable and next class are surfaced early.' },
          { title: 'What needs attention', description: 'Attendance, tasks and fee or dues information are easier to identify without searching through unrelated content.' },
          { title: 'What supports study', description: 'Notes and notifications have clear places within a simpler navigation structure.' },
        ],
      },
      { id: 'interface', type: 'media', label: 'Interface study', title: 'Student priorities', caption: 'Approved redesign concept imagery will be added here.' },
      {
        id: 'responsive-design', type: 'narrative', label: 'Responsive design', title: 'Keep the hierarchy when the screen changes.',
        paragraphs: [
          'The concept considers smaller screens as part of the dashboard experience. High-priority information should remain easy to reach, while secondary details can follow in a natural reading order.',
          'This is a design exploration, not a claim that the university adopted or deployed a new portal.',
        ],
      },
      {
        id: 'reflection', type: 'narrative', label: 'Reflection', title: 'A clearer starting point for students.',
        paragraphs: ['The work demonstrates an approach to reducing dashboard friction through information hierarchy and student-centered navigation. It has no claimed institutional or measured outcome.'],
      },
    ],
  },
  'case-zero': {
    lead: 'An investigation game shaped by what the first interaction model made difficult.',
    sections: [
      {
        id: 'starting-point', type: 'narrative', label: 'Starting point', title: 'The terminal was the whole world.',
        paragraphs: [
          'CASE//ZERO began as a terminal-only digital investigation game. Players would work through files, logs and emails using investigation mechanics inside a command-driven environment.',
          'The format had a strong premise, but it asked the interface to carry discovery, navigation and progression at the same time.',
        ],
      },
      { id: 'turning-point', type: 'statement', text: 'The terminal was interesting. It was also the source of friction.' },
      {
        id: 'problem', type: 'narrative', label: 'Problem / Iteration', title: 'Progression needed to be easier to read.',
        paragraphs: [
          'The terminal-only interaction made it less clear what evidence mattered and how one discovery led to another. Rather than defending that first assumption, the product direction shifted toward a hybrid forensic interface.',
          'The terminal remains useful as one investigative tool, while other parts of the experience can make evidence and progress visible.',
        ],
      },
      {
        id: 'hybrid-interface', type: 'features', label: 'Solution direction', title: 'Give the investigation a visible structure.',
        intro: 'The revised direction separates the work of exploring, organizing and acting on evidence.',
        items: [
          { title: 'Evidence exploration', description: 'Files, logs and emails become material to inspect rather than a maze of commands to remember.' },
          { title: 'Tags and notebook', description: 'Evidence can be organized alongside a clearer sense of what has been learned and what remains open.' },
          { title: 'Terminal as a tool', description: 'Command-driven moments retain their character without carrying the entire interface.' },
        ],
      },
      { id: 'interface', type: 'media', label: 'Interface study', title: 'Investigation flow', caption: 'Approved CASE//ZERO interface imagery will be added here.' },
      {
        id: 'reflection', type: 'narrative', label: 'Reflection', title: 'Changing the interaction model was the work.',
        paragraphs: ['CASE//ZERO is an exploration of how a compelling concept can become more usable through iteration. The case study documents a change in direction, not a shipped product or measured player result.'],
      },
    ],
  },
}
