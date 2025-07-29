// src/components/GadgetsFullContent.jsx
import React from 'react';
import GadgetCard from './Gadgetcard'; // Ensure GadgetCard has dark mode styles

const GadgetsFullContent = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {/* I. Core & Most Frequent Gadgets: */}
    <h3 className="col-span-full text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b-2 border-blue-200 pb-2">I. Core & Most Frequent Gadgets</h3>

    <GadgetCard
      name="Four-Dimensional Pocket"
      image="https://placehold.co/200x150/ADD8E6/000000?text=4D+Pocket"
      description="This is not just a pocket; it's Doraemon's primary and most iconic feature. It's a small, checkered pouch on his stomach that acts as a portal to a four-dimensional space. From this pocket, Doraemon can retrieve an almost infinite number of futuristic gadgets, tools, and contraptions. It defies the laws of physics, holding items far larger than its apparent size and allowing Doraemon to access them instantly. It's the source of all solutions (and often new problems) in the series."
    />
    <GadgetCard
      name="Anywhere Door"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Anywhere+Door"
      description="A large, pink, rectangular door that, when opened, instantly leads to any location the user desires. It eliminates travel time and distance, leading to quick escapes, spontaneous trips, and a myriad of adventures."
    />
    <GadgetCard
      name="Bamboo-Copter"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Take-Copter"
      description="A small, single-rotor propeller that attaches to the user's head (or any object), allowing free flight through the air. Its battery life is a recurring comedic limitation."
    />
    <GadgetCard
      name="Time Machine"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Time+Machine"
      description="A vehicle, usually accessed via Nobita's desk drawer, for traveling through time to any point in the past or future. Fundamental to the series' premise, used for historical exploration or fixing past mistakes."
    />
    <GadgetCard
      name="Memory Bread"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Memory+Bread"
      description="Slices of bread that, when pressed onto text and eaten, allow temporary memorization of information. Nobita's go-to for tests, but overeating leads to digestive issues and forgetting everything."
    />
    <GadgetCard
      name="Small Light"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Small+Light"
      description="A flashlight-like gadget that shrinks objects or living beings. Often paired with Big Light for enlarging. Used for exploring small spaces or making large objects manageable."
    />
    <GadgetCard
      name="Air Cannon"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Air+Cannon"
      description="A hand-mounted device that fires powerful blasts of compressed air. One of Doraemon's most frequently used offensive/defensive gadgets, demonstrating non-lethal force."
    />
    <GadgetCard
      name="Translator Jelly"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Translator+Jelly"
      description="A jelly-like food that, when eaten, allows the consumer to understand and speak any language, including alien languages or animal sounds, for a limited time."
    />
    <GadgetCard
      name="What-If Box"
      image="https://placehold.co/200x150/ADD8E6/000000?text=What-If+Box"
      description="A telephone booth-like gadget that creates alternate realities based on a 'what if' scenario. A powerful and often dangerous gadget that teaches lessons about changing reality."
    />

    {/* II. Transportation & Exploration Gadgets: */}
    <h3 className="col-span-full text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b-2 border-blue-200 pb-2 mt-8">II. Transportation & Exploration Gadgets</h3>
    <GadgetCard
      name="Time Kerchief / Time Cloth"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Time+Cloth"
      description="A magical cloth that can accelerate or reverse the aging process of anything it covers. Used for repairing broken items or seeing future states."
    />
    <GadgetCard
      name="Go-Anywhere-Road"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Go-Anywhere-Road"
      description="A portable, roll-out road that can extend indefinitely, allowing users to create a path over obstacles, across water, or through difficult terrain."
    />
    <GadgetCard
      name="Pass-Through Hoop"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Pass-Through+Hoop"
      description="A ring that allows users to pass through solid objects like walls or doors. Primarily used for sneaking, escaping, or gaining access to restricted areas."
    />
    <GadgetCard
      name="Cloud Hardener"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Cloud+Hardener"
      description="A gas that hardens clouds into solid, walkable surfaces, allowing for adventures in the sky."
    />
    <GadgetCard
      name="Submarine"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Submarine"
      description="Various miniature submarines for underwater exploration, often used in aquatic adventures."
    />
    <GadgetCard
      name="Space Exploration Ship"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Space+Ship"
      description="Small spacecraft for interstellar travel, frequently featured in Doraemon movies for grand cosmic adventures."
    />
    <GadgetCard
      name="Flying Carpet"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Flying+Carpet"
      description="A magical carpet that allows flight, offering an alternative and often more whimsical mode of aerial transportation."
    />
    <GadgetCard
      name="Underground Submarine"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Underground+Sub"
      description="A specialized vehicle for exploring underground environments and subterranean worlds."
    />

    {/* III. Utility & Convenience Gadgets: */}
    <h3 className="col-span-full text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4 border-b-2 border-blue-200 pb-2 mt-8">III. Utility & Convenience Gadgets</h3>
    <GadgetCard
      name="Dress-Up Camera"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Dress-Up+Camera"
      description="A camera that instantly changes a person's outfit to whatever is desired, by taking a photo of the desired clothing. Used for disguises, fashion, or quick costume changes."
    />
    <GadgetCard
      name="Copying Machine"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Copy+Machine"
      description="A machine that creates exact duplicates of objects or beings. Leads to hilarious chaos when misused, highlighting the dangers of shortcuts."
    />
    <GadgetCard
      name="Voice Changer"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Voice+Changer"
      description="A device or candy that alters a person's voice to sound like someone else's. Used for pranks, impersonations, or disguises."
    />
    <GadgetCard
      name="Lie Detector"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Lie+Detector"
      description="A small device that beeps or vibrates when someone tells a lie, often used to expose truths or create comedic situations."
    />
    <GadgetCard
      name="Gourmet Tablecloth"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Gourmet+Tablecloth"
      description="A tablecloth that can instantly produce any dish requested by the user, perfect for satisfying cravings or hosting instant feasts."
    />
    <GadgetCard
      name="Invisible Cape"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Invisible+Cape"
      description="A cape that renders the wearer completely invisible. Frequently used by Nobita for pranks, spying, or escaping from bullies."
    />
    <GadgetCard
      name="Growth Spray"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Growth+Spray"
      description="A spray that makes plants or objects grow rapidly, used for quick gardening or creating giant props."
    />
    <GadgetCard
      name="Weather Box"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Weather+Box"
      description="A small box that controls local weather conditions, from sunshine to rain or snow. Used for convenience or dramatic effects."
    />
    <GadgetCard
      name="Dream Machine"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Dream+Machine"
      description="A device that allows users to experience or control dreams, or even enter others' dreams. Provides escapism but sometimes blurs reality."
    />
    <GadgetCard
      name="Human Controller"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Human+Controller"
      description="A remote control that temporarily controls a person's actions. Often used mischievously by Nobita, leading to comical situations."
    />
    <GadgetCard
      name="Express Diary"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Express+Diary"
      description="A diary where anything written comes true, leading to both helpful and problematic situations depending on Nobita's wishes."
    />
    <GadgetCard
      name="Robot Arm"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Robot+Arm"
      description="An extendable robotic arm for reaching or manipulating objects from a distance, useful for various tasks."
    />
    <GadgetCard
      name="Super Dictionary"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Super+Dictionary"
      description="A dictionary providing instant information on any topic, often used by Nobita for quick homework answers."
    />
    <GadgetCard
      name="Friendship Capsule"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Friendship+Capsule"
      description="A capsule that, when consumed, strengthens bonds between people, sometimes with exaggerated or humorous effects."
    />
    <GadgetCard
      name="Time Television"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Time+TV"
      description="A television that shows events from the past or future, often used for research, spying, or predicting outcomes."
    />
    <GadgetCard
      name="Pet Translator"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Pet+Translator"
      description="A device to understand and communicate with animals, leading to heartwarming or funny interactions."
    />
    <GadgetCard
      name="Instant House"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Instant+House"
      description="A compact capsule that expands into a fully furnished house, useful for instant shelter, secret hideouts, or quick camping."
    />
    <GadgetCard
      name="Mood Maker Orchestra"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Mood+Orchestra"
      description="Tiny robots that play music to influence people's emotions, from joy to sadness, creating specific atmospheres."
    />
    <GadgetCard
      name="Solidifying Gas"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Solidifying+Gas"
      description="A gas that can turn intangible things (like sound or thoughts) into solid, manipulable forms."
    />
    <GadgetCard
      name="Super Speed Shoes"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Speed+Shoes"
      description="Shoes that grant incredible running speed, often used for races, quick escapes, or reaching places in record time."
    />
    <GadgetCard
      name="Story Teller"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Story+Teller"
      description="A gadget that creates and narrates stories based on user input, often with unexpected plot twists."
    />
    <GadgetCard
      name="Express Mail"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Express+Mail"
      description="A system for instant delivery of letters or small packages, ensuring messages or items reach their destination immediately."
    />
    <GadgetCard
      name="Gravity Controller"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Gravity+Controller"
      description="A pen or device that can manipulate local gravity, allowing users to float, increase weight, or stick to surfaces."
    />
    <GadgetCard
      name="Mini-Doraemons"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Mini-Dora"
      description="Smaller, colorful versions of Doraemon with their own mini-gadgets. They assist Doraemon and Nobita, often adding comedic chaos with their antics."
    />
    <GadgetCard
      name="Picture Story Book"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Story+Book"
      description="A book that brings its stories to life, allowing characters to enter or exit the book's world, creating interactive adventures."
    />
    <GadgetCard
      name="Universal Passport"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Universal+Passport"
      description="A passport granting access to any place or dimension, allowing travel to otherwise restricted or fictional locations."
    />
    <GadgetCard
      name="Instant Photo Album"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Photo+Album"
      description="An album that automatically fills with photos of past or future events, providing visual records or glimpses into other times."
    />
  
    <GadgetCard
      name="Ultra Stop Watch"
      image="https://placehold.co/200x150/ADD8E6/000000?text=Ultra+Stop+Watch"
      description="An advanced stopwatch that can temporarily stop time for everyone except the user. This allows the user to move freely while others are frozen, useful for pranks or solving problems discreetly."
    />
  </div>
);

export default GadgetsFullContent;