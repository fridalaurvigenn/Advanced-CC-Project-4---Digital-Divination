// Function to generate a random tarot card reading
function generateRandomPrediction() {
  // Define interpretations containing possible interpretations for past, present, and future
  const interpretations = {
    past: [
      {
        // death
        text: "This card, Death, shows that there was a period of transformation and change, a time where old things ended to make way for new beginnings. This phase likely brought about significant shifts in your life landscape, orchestrating the end of certain paths and initiating new ones, more aligned with your growth and transformation. Through this transformative period, you were called to release outdated beliefs or situations, opening up space for new energies and opportunities to enter your life. This card signifies a period where profound change was not just inevitable but necessary, facilitating a renewal that brought fresh perspectives and experiences into your life. It speaks to the courage it took to let go and the wisdom gained through embracing the transformative power of endings and beginnings.",
        image: "card_Images/past_image_1.png",
        orientation: "upright",
      },
      {
        // the devil
        text: "As you encounter The Devil in reverse, it's important to recognize that this card represents a powerful and complex set of energies and forces. On one level, it may be urging you to confront and challenge any beliefs or values that you have been taught to view as 'evil' or 'shameful'. This could include exploring your own desires and impulses around material possessions, such as money, goods, or food, and questioning any feelings of guilt or shame that you may have around these things. At the same time, The Devil in reverse can also indicate a sense of lack of control or an excessive, obsessive drive towards achieving your goals. You may feel a raw, powerful ambition that is driving you forward, even at the cost of other important aspects of your life. Alternatively, you may be prone to choosing illusion over truth, or allowing yourself to be swept away by your own fantasies or desires. If you're feeling stuck, unhappy, or ineffectual in your life, it's important to resist the urge to revert to old habits or patterns that may have led you to this place. Instead, try to approach your challenges with an open and curious mind, and be willing to explore new ideas or approaches that may help you to break free from old patterns and beliefs.",
        image: "card_Images/past_image_2.png",
        orientation: "reversed",
      },
      {
        // judgement
        text: "This card, Judgement, signals the end of a phase in your life, and the beginning of a new one. It invites you to review past events and make clear decisions based on your newfound clarity. With the energy of this card guiding you, you will find that you can easily let go of any issues or problems that have been holding you back. You will feel a renewed sense of purpose and direction, as you move confidently into the future. As you embrace this new phase in your life, you will find that success and recognition come easily to you. Even if you weren't expecting it, financial abundance and respect from others will be yours. You have worked hard to get to this point, and now you can enjoy the rewards of your efforts. So embrace the power of 'The Judgement' card and trust in your ability to make clear decisions. You have the wisdom and insight to move forward with confidence and strength, knowing that the future holds great things for you.",
        image: "card_Images/past_image_3.png",
        orientation: "upright",
      },
      {
        // justice
        text: "As the Justice card has been drawn in reverse, you might feel a sense of injustice, as if things are not going in your favor. It can be frustrating to accept the outcome of a situation that you feel is unfair. However, it's important to remember that life is not always fair and things don't always go as planned. You might also feel like someone has taken advantage of you, and this can be a difficult situation to deal with. This card is also a sign that you have done everything in your power to resolve the situation. You have put in the effort, time and energy to make things right. It is important to acknowledge this and be proud of yourself for doing so. Even though things may not have worked out the way you wanted them to, it's important to remember that you did your best. This card is also a reminder that everything happens for a reason, and there might be a karmic lesson to be learned. Sometimes we have to face the consequences of our actions, and it's important to take responsibility for them. It's hoped that you will learn from the situation and avoid making the same mistake again in the future.",
        image: "card_Images/past_image_4.png",
        orientation: "reversed",
      },
      {
        // the empress
        text: "This card signifies a time when there might have been barriers preventing you from blossoming fully, possibly holding back the nurturing energies that promote growth and harmony. It was a phase where the environment might not have been conducive to your growth, possibly limiting your potential and restricting the flow of nurturing energies, resulting in a standstill or slow progression in various aspects of your life. It can also represent a time when you or others didn't fully embrace their feminine, nurturing side, possibly leading to neglect of well-being or creativity. During this time, there might have been a tendency to ignore your needs or not prioritize self-care, which could have halted your creative flow and personal growth. It was a phase where the gentle nurturing energies of the Empress were not fully utilized, possibly resulting in feelings of neglect or a stifled creative spirit, inhibiting the free flow of love and nurturing that fosters wellbeing and growth.",
        image: "card_Images/past_image_5.png",
        orientation: "reversed",
      },
      {
        // the hermit
        text: "If you are asking about the past, and you draw the Hermit, it means that a period of introspection and self-reflection was prominent, where seeking deeper understanding and solitary contemplation were necessary. This phase allowed you to delve deep into your inner world, shedding light on areas that required understanding and healing. It was a spiritual sojourn, where you could engage with your higher self, seeking wisdom from within and paving the way for a more enriched understanding of yourself and your journey. Additionally, it can represent a time of inner exploration, personal growth, and possibly distancing oneself from external noise to focus on one's true path. During this time, the distractions of the outer world took a back seat, allowing you to forge a path grounded in personal truth and understanding. This period laid the foundation for the rich inner landscape that you carry today, a testimony to the personal growth and understanding nurtured during that time of solitude.",
        image: "card_Images/past_image_6.png",
        orientation: "upright",
      },
      {
        // queen of wands
        text: "As you draw the Queen of Wands, it means that there was a time of nurturing your inner fire, and possibly standing tall with confidence and vibrancy, actively working towards your goals with a warm and optimistic outlook. This period allowed you to shine, fostering a spirited and determined approach to the pursuits that mattered most to you. The Queen encouraged you to embrace your radiant energy, instilling a zest for life and a beautiful optimism that propelled you forward, making it a period where you not only pursued your dreams but did so with a heart full of joy and hope. It represents represent a period where you embraced your inner strength, took charge with grace and determination, while also nurturing your creative and passionate side. his was a time marked by empowerment, where your innate strengths and talents were brought to the fore, allowing you to approach situations with a warm heart and a fearless spirit.",
        image: "card_Images/past_image_7.png",
        orientation: "upright",
      },
      {
        // the hanged man
        text: "This card, The Hanged Man, may mean that there was a period of pause and reflection, a time where sacrifices were made for greater understanding or growth. This could indicate a phase where you deliberately chose to forgo immediate gratifications to gain a deeper insight or to work towards a higher goal. It suggests a time marked by inner growth and understanding, where the pause allowed you to gain a new perspective and evolve. It can represent a period of voluntary or forced surrender, where patience was tested, and it became necessary to look at things from a different perspective. During this time, you were encouraged to release control and allow things to unfold naturally, perhaps learning to trust the process more than focusing on the outcome. ",
        image: "card_Images/past_image_8.png",
        orientation: "reversed",
      },
    ],
    present: [
      {
        // strength
        text: "Drawing this card, Strength, reversed can indicate that you are being too hard on yourself in the quest for self-improvement. The woman on the card is making gentle self-corrections. She isn’t beating the lion up. Today, be kinder to yourself when taming the unruly parts of your experience. It is important that you aren't just courageous, but that you are also respecting who you are and what makes you strong. True strength is not demonstrated through grand displays of power, but rather through small, compassionate self-directed corrections in the form of good decisions. Strength is not a one-time achievement, but rather a daily routine that becomes easier with practice and time. It's also crucial to remember that self-corrections should come from a place of self-love and compassion rather than guilt or shame.",
        image: "card_Images/present_image_1.png",
        orientation: "reversed",
      },
      {
        // temperance
        text: "This card reminds us to slow down and take a step back. It's essential to resist the urge to rush into things or to seek instant gratification from the material world. The Temperance card suggests that we may need to suspend our usual way of thinking or approach to a situation in order to gain a fresh perspective. This process can be uncomfortable and challenging, but it's necessary for growth and transformation. This card can also be a sign that we need to let go of control and surrender to the flow of life. It's easy to become impatient when things don't move as quickly as we would like. However, The Temperance card reminds us that there's value in slowing down and taking a more contemplative approach. Sometimes, we need to take a step back in order to move forward. Many people who draw The Temperance card may see it as a temporary way to cope with difficult times. It's important to remember that this card is not a permanent state, but rather a momentary pause in our journey. Trust that the universe has a plan for you and that this temporary pause is leading you towards growth and transformation. In summary, The Temperance card is a reminder to slow down, suspend our usual way of thinking, and gain a fresh perspective. It's essential to resist the urge to rush into things and seek instant gratification from the material world.",
        image: "card_Images/present_image_2.png",
        orientation: "reversed",
      },
      {
        // the chariot
        text: "The Chariot is a card of action and movement. It represents the energy of progress and the forward momentum that is essential to achieving success. If you have been feeling stuck or stagnant, this card encourages you to take action and move towards your goals with purpose and determination. The Chariot can also signify a period of rapid change or acceleration in your life. You may find yourself swept up in a flurry of activity, as new opportunities and challenges present themselves. While this can be exciting, it can also be overwhelming, so it is important to stay focused and grounded during this time. In terms of relationships, the Chariot can indicate a fast-moving romance or a passionate affair. If you are currently single, this card suggests that you may meet someone new who is dynamic and exciting. If you are in a relationship, this card can indicate a period of increased intimacy and connection with your partner. Overall, the Chariot reminds you to stay alert and ready for action. Keep your eyes open for new opportunities and be willing to take risks in order to achieve your goals. With the energy of this card on your side, you can accomplish anything you set your mind to.",
        image: "card_Images/present_image_3.png",
        orientation: "reversed",
      },
      {
        // the emperor
        text: "You may feel like you are in a position of authority and that you must maintain control. However, you should also be aware that it is not always easy to be the leader. It is a lonely and difficult path to walk. You may be feeling overwhelmed or stressed, but you have the strength and courage to handle it. This card also reminds you to be fair and just in your dealings with others. You should strive to be a role model, and lead by example. Remember that your decisions have consequences, so be careful with your choices. The Emperor card asks you to be confident, but not arrogant, and to use your power and influence for the greater good.",
        image: "card_Images/present_image_4.png",
        orientation: "upright",
      },
      {
        // the fool
        text: "You are on the verge of a new journey, filled with unpredictability, spontaneity, and potential learning opportunities. This card represents the beginning of all creativity and a desire to accomplish something new. It's about letting go of preconceived notions and open-mindedness, embracing the unknown with a sense of curiosity and wonder. Thus, the Fool can signify a time of transition and change, a moment to step off the familiar path and venture into a world of new experiences. It can represent an innocent approach to life, a leap of faith you need to take, or the need to embrace unpredictability. The Fool card suggests you are at a crossroads, ready to take a risk, yet unafraid of what lies ahead. It's a card of potential, reminding you to stay open to the new experiences that life is offering. In this context, it prompts you to approach life with the curiosity of a child, uninhibited by the fear of failure.",
        image: "card_Images/present_image_5.png",
        orientation: "reversed",
      },
      {
        // queen of the cups
        text: "You support others by listening with your heart, being compassionate, and caring for them deeply. You are empathic and can sense the needs of others by tuning in to your intuition, and you hold the space for others to express their emotions and be the truest, most authentic versions of themselves. You have mastered this in such a way that, even though you hold space for emotional expression, you don't take on other people's energy or emotional issues because you are well-grounded and know where to create a healthy separation. The Queen of Cups says you are highly intuitive, creative, and in flow with the surrounding energies. In your interactions with others, you can easily read other people to get a sense of how to communicate effectively, enabling you both to feel heard and understood. Others may come to you to confide their personal issues regarding relationships, emotions and feelings. They trust you and know that you always have the right solution.",
        image: "card_Images/present_image_6.png",
        orientation: "upright",
      },
      {
        // the world
        text: "You are glowing with a sense of wholeness, achievement, fulfilment, and completion. A long-term project, period of study, relationship or career has come full circle, and you are now reveling in the sense of closure and accomplishment. This card could represent graduation, a marriage, the birth of a child, or achieving a long-held dream or aspiration. You have finally accomplished your goal or purpose. Everything has come together, and you are in the right place, doing the right thing, achieving what you have envisioned. You feel whole and complete. Now, The World card invites you to reflect on your journey, honor your achievements, and tune into your spiritual lessons. However, if you have not quite reached this point of completion, then you are very close! You may still need an added level of understanding to graduate to a higher level and enjoy real success. Look back at your past experiences and acknowledge how far you have come and what you learned along the way. It may surprise you to look back at your progress and see how much you achieved. This reflection may also be what you need to bring your project to its final stages.",
        image: "card_Images/present_image_7.png",
        orientation: "upright",
      },
      {
        // the wheel
        text: "You might be feeling down and frustrated because of a situation that is causing you unhappiness. However, it's important to remember that this is not the end of the road. In fact, this could be an opportunity for you to experience some amazing and positive outcomes. The first step is to assess your situation and make plans to address each problem individually. Try to break down the issues into manageable pieces and focus on tackling them one by one. This card is showing you how to segment your problems and find solutions for each of them. Once you have a clear understanding of your challenges, you can take steps to fix them. Remember, progress might not happen overnight. But with patience and perseverance, things should improve after you've put in the effort. Despite all the delays and stagnation you might have experienced, this card is signaling a new phase in your life. Be open to the opportunities that come your way and stay positive. You never know what amazing things could be waiting for you just around the corner.",
        image: "card_Images/present_image_8.png",
        orientation: "reversed",
      },
      {
        // the hierophant
        text: "As you draw the Hierophant in reverse, it is a reminder for you to be bold and unafraid to take chances in your life. This card suggests that you may be feeling pressured by others to conform to their expectations or desires, instead of being true to yourself and your own convictions. It's important to resist this pressure and stay true to who you are and what you believe in. This card can also indicate a crisis in faith or a lack of self-belief, which can lead to confusion and disorderly behavior. It's important to take the time to reflect on your values and beliefs, and to work on building your confidence and self-esteem. Remember that you have the power to create your own path and to make your own decisions in life. If you are feeling lost or confused, it may be helpful to seek guidance and support from others who share your values or from a trusted mentor or advisor. Don't be afraid to ask for help and to reach out to those who can offer you support and guidance. Ultimately, this card is a reminder that you are in control of your own life and that you have the power to make the choices that are right for you.",
        image: "card_Images/present_image_9.png",
        orientation: "reversed",
      },
    ],
    future: [
      {
        // the high priestess
        text: "Take the time to reflect on what you need to change and what you need to let go of. This card encourages you to take a step back and observe your life from a different perspective. You may need to make some difficult decisions, but trust your intuition and do what is best for you. It's important to acknowledge that problems may not be resolved quickly. You need to be patient with yourself and trust the process. Sometimes, the hardest thing to do is to simply observe and not take action. However, it can be the most beneficial in the long run. You may also find that during this time of observation, you may feel disconnected from others or even yourself. It's important to remember that this is a natural part of the process. Take the time to explore your own thoughts and emotions, and be gentle with yourself. Lastly, this card also reminds you to look for balance in your life. Are you neglecting important areas such as your relationships, health, or career? Take the time to assess where you are putting your energy and make adjustments as needed.",
        image: "card_Images/future_image_1.png",
        orientation: "upright",
      },
      {
        // the lovers
        text: "The Lovers card signifies that you have to make a choice that will affect your life in significant ways. This can be a daunting task, but it is important to remember that it is ultimately up to you to make the decision. You may feel pressure from others to choose one option over the other, but it is important to listen to your own intuition and make the decision that feels right to you. This card also represents the power of love and the importance of strong relationships. It may be a time to focus on building deeper connections with those around you, whether it be with a partner, friend, or family member. However, it is important to remember that love and relationships require effort and compromise. You may need to make sacrifices or compromise your own desires in order to strengthen your connections with others. Trust your instincts and listen to your heart when making decisions related to love and relationships.",
        image: "card_Images/future_image_2.png",
        orientation: "reversed",
      },
      {
        // the magician
        text: "This card, The Magician, represents a phase of empowerment and active manifestation of your desires is beckoning, urging you to utilize your skills optimally. This card encourages you to harness all the resources and talents at your disposal to pursue your ambitions actively. It's a time where your initiative and proactivity can really shape the future, steering your life in the direction you desire with confidence and determination. It can represent a fruitful period of achieving your aspirations through focus and application of your abilities. This period beckons you to take charge, with a reminder that you have the power to shape your destiny through determined effort and a clear vision. It's an invitation to approach life with a proactive mindset, identifying opportunities and taking meaningful steps towards your goals.",
        image: "card_Images/future_image_3.png",
        orientation: "upright",
      },
      {
        // the moon
        text: "A time of uncertainty and mystery is approaching, with things not being quite as they seem; it's a period to trust your intuition. You might find that the line between reality and illusion blurs, encouraging you to lean on your inner guidance to navigate through the fog. Embrace this time as one of deep introspection, allowing yourself to explore the rich landscape of your subconscious and to find answers in unlikely places. The Moon  It urges you to trust your instincts and pay attention to your dreams. This period can be a rich time for personal growth as you dive deep into your subconscious mind, uncovering hidden layers of your personality and potentially healing past wounds. Be open to the messages that your dreams and intuition convey, as they can offer guidance and a deeper understanding of the paths unfolding before you.",
        image: "card_Images/future_image_4.png",
        orientation: "upright",
      },
      {
        // the star
        text: "The Star represents a period of hope, inspiration, and spiritual growth is coming your way, encouraging you to have faith in the future. This card is often seen as a breath of fresh air, bringing with it positive energies and a refreshed perspective on life. It invites you to remain open and receptive to the blessings that the universe has in store for you, nurturing dreams and fostering a spirit of optimism as you move forward with grace and confidence. It can also represent a phase of healing and renewal, where you can connect to your higher self and pursue your dreams with a hopeful heart. This period would be characterized by a deeper understanding of your own needs and desires, allowing for personal growth and self-discovery. It is a time to foster dreams and aspirations, with the universe guiding you gently towards your true path, encouraging you to embrace the beautiful possibilities that lie ahead with a sense of wonder and excitement.",
        image: "card_Images/future_image_5.png",
        orientation: "upright",
      },
      {
        // the sun
        text: "The Sun reversed means that there might be delays in achieving your desires, but the positive energy of the Sun is still present, encouraging you to remain hopeful. Even though the joy and success associated with the Sun card might take a bit longer to manifest, it is important to continue nurturing your dreams and ambitions. Stay positive, be patient, and know that this period of delay is just a stepping stone to the bright future that awaits you, as the radiant energy of the Sun still supports your path, promising that joy and fulfillment are within reach. And while you might encounter obstacles that slow your progression, remember that these are temporary and can be overcome with a determined spirit. The Sun reversed advises you to keep a positive mindset, to work through challenges steadily and with optimism, fostering resilience that will eventually lead you to victory, as you're encouraged to hold onto your dreams and keep pushing forward with hope and courage.",
        image: "card_Images/future_image_6.png",
        orientation: "reversed",
      },
      {
        // the tower
        text: "The Tower means that sudden changes and upheavals are on the horizon, potentially shaking the foundations of your current circumstances to bring about transformation. This period, although initially might feel disruptive, is an invitation to release what no longer serves you, making way for new beginnings. It's a time to hold fast to your inner strength and resilience, knowing that the changes occurring are making way for a more stable and prosperous future. It can represent a breaking down of existing structures, making way for new opportunities and a fresh start, albeit through some initial chaos and disruption. This signifies a cleansing process where outdated beliefs and situations are broken down to pave the way for more authentic experiences and growth. It's an awakening phase where you might find a renewed perspective, encouraging you to build on a foundation that is true and aligned with your highest self, fostering lasting, positive transformations.",
        image: "card_Images/future_image_7.png",
        orientation: "upright",
      },
      {
        // king of cups
        text: "You might face a period of emotional manipulation or repression. During this time, you could notice a tendency either in yourself or others to suppress feelings instead of expressing them openly and honestly. Be vigilant and try to foster an environment where open dialogue is encouraged and where feelings can be discussed without fear of repercussion, steering clear of those who might try to manipulate emotional landscapes to their advantage. The King of Cups reversed can represent a leader who is not in control of their emotions and might act manipulatively. This suggests a period where the individual at the helm may not be the most stable, potentially using their emotional understanding for manipulation rather than guidance. It's a call to remain grounded and not be swayed by volatile emotional currents, making efforts to remain honest and open in your interactions to avoid falling prey to such influences.",
        image: "card_Images/future_image_8.png",
        orientation: "reversed",
      },
    ],
  };

  // Generate random indices to select interpretations from each category
  const randomPastIndex = Math.floor(
    Math.random() * interpretations.past.length
  );
  const randomPresentIndex = Math.floor(
    Math.random() * interpretations.present.length
  );
  const randomFutureIndex = Math.floor(
    Math.random() * interpretations.future.length
  );

  // Construct the tarot card reading object
  const prediction = {
    past: interpretations.past[randomPastIndex],
    present: interpretations.present[randomPresentIndex],
    future: interpretations.future[randomFutureIndex],
  };

  return prediction;
}

// Function to display the tarot card reading
function displayPrediction(prediction) {
  const tarotResultsDiv = document.getElementById("tarotResults");
  tarotResultsDiv.innerHTML = `
  <div class="prediction-container">
  <div class="prediction">
    <img src="${
      prediction.past.image
    }" alt="Past Image" style="width: 220px; height: auto; transform: ${
    prediction.past.orientation === "reversed" ? "rotate(180deg)" : "none"
  };">
    <p><h2>Past:</h2> ${prediction.past.text}</p>
  </div>
  <div class="prediction">
    <img src="${
      prediction.present.image
    }" alt="Present Image" style="width: 220px; height: auto; transform: ${
    prediction.present.orientation === "reversed" ? "rotate(180deg)" : "none"
  };">
    <p><h2>Present:</h2> ${prediction.present.text}</p>
  </div>
  <div class="prediction">
    <img src="${
      prediction.future.image
    }" alt="Future Image" style="width: 220px; height: auto; transform: ${
    prediction.future.orientation === "reversed" ? "rotate(180deg)" : "none"
  };">
    <p><h2>Future:</h2> ${prediction.future.text}</p>
  </div>
</div>
`;
}

// Function to handle button click
function handleButtonClick() {
  const generateBtn = document.getElementById("generatePredictionBtn");
  const btnText = generateBtn.textContent;
  const questionInput = document.getElementById("questionInput");

  if (btnText === "Generate Reading") {
    const inputText = questionInput.value.trim();
    if (inputText === "") {
      alert("Please enter your question or intention.");
      return;
    }

    // Generate a random tarot card reading
    const randomPrediction = generateRandomPrediction();

    // Display the random tarot card reading
    displayPrediction(randomPrediction);

    // Disable the input field
    questionInput.disabled = true;

    // Change button text to "Generate New Reading"
    generateBtn.textContent = "Generate New Reading";
  } else {
    // Reset to default state when "Generate New Reading" clicked
    const tarotResultsDiv = document.getElementById("tarotResults");
    tarotResultsDiv.innerHTML = ""; // Clear the previous reading

    // Enable the input field
    questionInput.disabled = false;

    // Reset button text to "Generate Reading"
    generateBtn.textContent = "Generate Reading";
  }
}

// Event listener for the button
document
  .getElementById("generatePredictionBtn")
  .addEventListener("click", handleButtonClick);
