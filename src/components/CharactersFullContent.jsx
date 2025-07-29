import React from 'react';
import CharacterCard from './CharacterCard'; // Ensure CharacterCard has dark mode styles

const CharactersFullContent = () => (
  <div className="grid grid-cols-1 gap-6"> {/* Changed to single column grid for main container to allow section titles to span full width */}

    {/* Nobita & Family */}
    <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b-2 border-blue-200 pb-2">Nobita & Family</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       <CharacterCard
        name="Doraemon"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Doraemon"
        description="Doraemon: The titular robotic cat from the 22nd century, sent by Sewashi to help Nobita. Has a 4D pocket for futuristic gadgets. Loves dorayaki, fears mice."
      />
      <CharacterCard
        name="Nobita"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Nobita"
        description="Nobita Nobi: The co-protagonist, a 10-year-old elementary school boy. Known for his laziness, poor grades, and bad luck. Despite flaws, he's kind-hearted, empathetic, and occasionally talented at shooting and string figures."
      />
     
      <CharacterCard
        name="Nobisuke"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Nobisuke"
        description="Nobisuke Nobi: Nobita's kind-hearted, easygoing salaryman father. More lenient than Tamako, he shares childhood stories and enjoys golf and drinks."
      />
      <CharacterCard
        name="Tamako"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Tamako"
        description="Tamako Nobi: Nobita's mother and the primary disciplinarian. She often scolds Nobita for grades and mischief but deeply loves her family, pushing him to be responsible."
      />
      <CharacterCard
        name="Sewashi"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Sewashi"
        description="Sewashi Nobi: Nobita's great-great-grandson from the 22nd century. He sends Doraemon back in time to change Nobita's disastrous future, often visiting with new gadgets."
      />
      <CharacterCard
        name="Nobisuke (Jr.)"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Nobita's+Son"
        description="Nobisuke Nobi (Jr.): The future son of Nobita and Shizuka. More athletic than his father but retains Nobita's kindness and occasional clumsiness. Appears in time-travel episodes."
      />
    </div>

    {/* Nobita's Friends */}
    <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b-2 border-blue-200 pb-2 mt-8">Nobita's Friends</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <CharacterCard
        name="Shizuka"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Shizuka"
        description="Shizuka Minamoto: Nobita's kind, intelligent, and cheerful classmate, and his future wife. Loves baths and piano (secretly dislikes practice), but terrible at violin. A compassionate voice of reason."
      />
      <CharacterCard
        name="Gian"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Gian"
        description="Takeshi 'Gian' Goda: The neighborhood bully, known for his size, strength, and temper. Infamously bad singer, but fiercely loyal and brave when friends are in danger. Terrified of his mother."
      />
      <CharacterCard
        name="Suneo"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Suneo"
        description="Suneo Honekawa: Gian's wealthy, snobbish sidekick. Loves showing off possessions, making Nobita envious. Cunning and manipulative, but can be a good friend. Self-conscious about his height."
      />
      <CharacterCard
        name="Dekisugi"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Dekisugi"
        description="Hidetoshi Dekisugi: Nobita's brilliant, 'perfect' classmate. Excels in academics, sports, and arts. Kind, modest, and always willing to help. His perfection often makes Nobita jealous."
      />
      <CharacterCard
        name="Jaiko"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Jaiko"
        description="Jaiko Goda: Gian's younger sister. Kind, gentle, and well-behaved. Passionate about drawing manga and dreams of being an artist. A supportive and sweet character."
      />
      <CharacterCard
        name="Sunetsugu"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Sunetsugu"
        description="Sunetsugu Honekawa: Suneo's younger brother, living in New York. More humble and less boastful than Suneo, often admired by Nobita for his kindness."
      />
    </div>

    {/* Adults & Neighbors */}
    <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b-2 border-blue-200 pb-2 mt-8">Adults & Neighbors</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <CharacterCard
        name="Sensei"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Teacher"
        description="Sensei (Teacher): Nobita's strict but caring elementary school teacher. Often scolds Nobita for poor grades but genuinely cares about his students' progress."
      />
      <CharacterCard
        name="Mrs. Goda"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Gian's+Mom"
        description="Mrs. Goda (Gian's Mother): Gian's formidable mother, who runs the local grocery store. The only person Gian truly fears, known for her strict discipline and keeping him in line."
      />
      <CharacterCard
        name="Mrs. Honekawa"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Suneo's+Mom"
        description="Mrs. Honekawa (Suneo's Mother): Suneo's doting and materialistic mother. Spoils Suneo with lavish gifts and encourages his boasting, but also protective of him."
      />
      <CharacterCard
        name="Mr. Honekawa"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Suneo's+Dad"
        description="Mr. Honekawa (Suneo's Father): Suneo's successful businessman father. Source of the family's wealth, less frequently seen but reinforces their affluent lifestyle."
      />
      <CharacterCard
        name="Yoshio Minamoto"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Shizuka's+Dad"
        description="Yoshio Minamoto (Shizuka's Father): Shizuka's gentle and supportive father. Offers wise advice and encourages her interests. Known for approving Nobita as Shizuka's future husband."
      />
      <CharacterCard
        name="Mrs. Minamoto"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Shizuka's+Mom"
        description="Mrs. Minamoto (Shizuka's Mother): Shizuka's kind and elegant mother. Cares deeply for her daughter, encouraging piano practice and social graces. Generally calm but firm when needed."
      />
      <CharacterCard
        name="Policeman"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Policeman"
        description="The Local Policeman: A recurring neighborhood patrolman. Sometimes involved in children's antics, trying to maintain order. Generally friendly but occasionally clueless."
      />
      <CharacterCard
        name="Mr. Nakamoto"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Nakamoto"
        description="Mr. Nakamoto: A kind and friendly neighbor in Nobita's town. Often seen gardening or enjoying quiet moments, offering a gentle presence in the community."
      />
    </div>

    {/* Future Robots */}
    <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b-2 border-blue-200 pb-2 mt-8">Future Robots</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Doraemon is now in Nobita & Family section */}
      <CharacterCard
        name="Dorami"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Dorami"
        description="Dorami: Doraemon's younger sister, an advanced robotic cat. More intelligent and responsible than Doraemon, often bailing him out. Loves melon bread, fears cockroaches."
      />
      <CharacterCard
        name="Mini-Doraemons"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Mini-Dora"
        description="Mini-Doraemons: Smaller, colorful versions of Doraemon. Communicate in 'Dora-language' and have mini-gadgets. Assist Doraemon and Nobita, often adding comedic chaos."
      />
     
    </div>

    {/* Animal Characters */}
    <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b-2 border-blue-200 pb-2 mt-8">Animal Characters</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <CharacterCard
        name="Muku"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Muku"
        description="Muku (Gian's Dog): Gian's pet bulldog. Loyal but mischievous, often involved in adventures. Gian is very fond of and protective of Muku, showing his softer side."
      />
      <CharacterCard
        name="Mi-chan"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Mi-chan"
        description="Mi-chan (Doraemon's Girlfriend): A normal female neighborhood cat Doraemon is infatuated with. Doraemon often tries to impress her, sometimes neglecting duties to Nobita."
      />
      <CharacterCard
        name="Shizuka's Pets"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Shizuka's+Pets"
        description="Shizuka's Pets: Various pets, including a rabbit (Muku) and sometimes a dog (Pero) or canary (Peeko). Reflect her gentle and caring nature."
      />
      <CharacterCard
        name="Peko"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Peko"
        description="Peko: A talking dog from the fictional kingdom of Bauwank. Brave and intelligent, he guides Nobita and friends in 'Nobita's Great Adventure into the Underworld'."
      />
      <CharacterCard
        name="Kibo"
        image="https://placehold.co/150x150/ADD8E6/000000?text=Kibo"
        description="Kibo: A sentient plant who communicates with humans. Appears in 'Nobita and the Green Giant Legend'. Helps friends understand nature's importance."
      />
    </div>
  </div>
);

export default CharactersFullContent;
