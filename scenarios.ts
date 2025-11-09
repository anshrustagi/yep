
import { Scenario } from './types';

export const scenarios: Scenario[] = [
  {
    title: "The Competitive Exam",
    scenario: "Your parents have invested their life savings in your coaching for the IIT entrance exam. Your passion, however, is to become a documentary filmmaker. The exam is in a month.",
    optionA: {
      text: "Devote all your time to the exam. Your passion can wait; your parents' happiness and financial security come first.",
      hedonicScore: 18,
      analysis: "This choice is a classic example of prioritizing collective happiness over individual passion, a common dilemma in Utilitarianism. By focusing on the exam, you maximize immediate and certain happiness for your parents, fulfilling a deeply felt cultural and familial duty. This action scores high on the 'Extent' principle, as their well-being is a significant positive utility. However, a deeper analysis using John Stuart Mill's concept of 'higher pleasures' might question this choice. The pleasure of creative fulfillment (filmmaking) could be considered a 'higher quality' pleasure than the pleasure of parental approval. Suppressing this passion introduces a significant, long-term pain for you, making the overall 'Purity' of this choice questionable. It is a pragmatic, but perhaps not holistically optimal, application of Consequentialism.",
      scoreExplanation: "Intensity (+10): The pleasure your parents feel from your compliance is very high, representing a significant positive utility.\nCertainty (+10): The probability of pleasing your parents by studying is extremely high, making this a reliable source of happiness.\nPropinquity (+5): The positive feedback from your parents is immediate, adding to its value.\nExtent (+8): The happiness produced directly affects two other people—your parents—making it a widespread good.\nDuration (-8): Your personal unhappiness from pursuing a career you dislike will be very long-lasting, a significant and enduring negative.\nPurity (-5): The pleasure is profoundly 'impure' because it is directly mixed with the significant pain of your own suppressed passion.\nFecundity (-12): Suppressing your true calling may lead to a future of quiet resentment and regret, not more pleasure."
    },
    optionB: {
      text: "Have an honest conversation with your parents, explaining your passion and suggest a compromise, like finishing a different degree first.",
      hedonicScore: 12,
      analysis: "This option seeks a middle ground, attempting to find a solution that maximizes long-term happiness for everyone involved. It is a sophisticated utilitarian move, but it is fraught with risk. The conversation itself is a certain, immediate pain (conflict), which must be weighed against the uncertain, future pleasure of mutual understanding. The Principle of Utility would support this if the potential for a 'fecund' outcome (a future of authentic happiness for all) is deemed high enough to justify the immediate risk. It is a choice that values authentic happiness over superficial harmony.",
      scoreExplanation: "Fecundity (+15): A successful conversation can lead to a future of authentic, shared happiness for the entire family. This potential for future, cascading pleasures is a highly 'fecund' outcome.\nDuration (+10): If successful, the resulting happiness will last a lifetime for all of you.\nCertainty (-8): The outcome is highly uncertain. The conversation could lead to a permanent rift, causing immense and lasting pain. This huge risk drastically lowers the score.\nPropinquity (-5): Any potential happiness from this choice is distant, while the immediate result is almost certainly the pain of conflict.\nIntensity (-5): The immediate pain of conflict is high, a significant negative factor.\nPurity (-3): The path to potential pleasure is tainted by the certain, immediate pain of confrontation.\nExtent (-2): The immediate pain of conflict will affect the entire family unit."
    },
    optionC: {
      text: "Secretly prepare for a film school entrance exam while pretending to study for the IIT exam. You'll try to manage both.",
      hedonicScore: -45,
      analysis: "From a Utilitarian perspective, this path of deceit is disastrous because it is almost certain to produce a net negative outcome. The act itself is filled with the pain of stress, guilt, and fear, making its 'Purity' zero. Furthermore, by dividing your attention, you dramatically increase the likelihood of failing at both endeavors. The eventual discovery of the deceit would cause immense pain to your parents, far greater than an honest disagreement. This choice fails every test of Consequentialism by actively creating pain and risking a catastrophic negative result for everyone.",
      scoreExplanation: "Intensity (-10): The pain of stress is high and constant, and the eventual pain of discovery would be extreme for your parents.\nDuration (-8): The anxiety would last for the entire preparation period, and the pain from discovery would be long-lasting.\nCertainty (-10): There is a high certainty of being caught or failing both exams due to divided attention, leading to widespread pain.\nPropinquity (-5): The pain of stress and guilt is immediate.\nPurity (-5): The action is filled with the 'impure' pain of constant stress, anxiety, and guilt. There is no pleasure here.\nFecundity (-5): This action will only lead to future pain in the form of failure, broken trust, and disappointment.\nExtent (-2): The eventual negative outcome would affect you and your parents very negatively, maximizing the spread of unhappiness."
    },
    optionD: {
      text: "Drop the IIT preparation completely, take a gap year to create a short film portfolio, and prove your passion and skill to your parents.",
      hedonicScore: -55,
      analysis: "While this choice might seem noble from a perspective of individual passion, it is a poor choice under the Principle of Utility. It causes immediate, certain, and intense pain to your parents, with no guarantee of future success to offset it. The calculation is deeply flawed: you are trading their certain pain for your highly uncertain pleasure. A core tenet of Hedonism is to weigh probabilities. Causing such significant, guaranteed pain for a long-shot, personal gain is not an ethically sound trade from a utilitarian viewpoint.",
      scoreExplanation: "Intensity (-15): The pain of disappointment and fear you inflict upon your parents is immense. This high-intensity pain is a massive negative.\nDuration (-10): The financial and emotional pain for your parents will be long-lasting.\nCertainty (-10): The pain you cause is 100% certain and happens immediately. Any pleasure from a filmmaking career is highly uncertain.\nPropinquity (-5): The pain is immediate, while the pleasure is remote and speculative.\nPurity (-5): Any future pleasure you might gain is built directly on the definite pain of your parents, making it profoundly 'impure'.\nFecundity (-5): This act of defiance could damage your family relationship, leading to more future pain.\nExtent (-5): The intense pain is inflicted on two other people, making the negative impact widespread."
    },
    flashcard: {
      concept: "The 'Extent' Principle",
      definition: "In Utilitarianism, 'Extent' refers to the number of people affected by an action. An action is considered more morally right if it produces happiness for a greater number of individuals."
    }
  },
  {
    title: "The Group Project",
    scenario: "In a critical class project that counts for a large part of your final grade, two of your four group members are not contributing at all. The deadline is approaching fast.",
    optionA: {
      text: "Do all the extra work yourself. It's unfair, but it guarantees a good grade for everyone and avoids conflict.",
      hedonicScore: 22,
      analysis: "This is a classic Act Utilitarianism choice. Looking only at this specific act, it generates the most immediate pleasure (a good grade) for the most people (the whole group) and avoids the definite pain of conflict or failure. It scores high on 'Extent' and 'Certainty'. However, a Rule Utilitarianism perspective would heavily critique this. If 'doing others' work for them' were a general rule, it would encourage laziness and be detrimental to the educational system. You are maximizing short-term utility at the cost of long-term fairness and character.",
      scoreExplanation: "Extent (+10): It produces the pleasure of a good grade for all 4 people in the group, maximizing the reach of the positive outcome.\nCertainty (+8): This is the most certain path to a good grade for everyone.\nIntensity (+6): The pleasure of getting a good grade is moderately high for everyone.\nDuration (+4): The pleasure of the good grade lasts until the end of the term.\nPropinquity (+4): The pleasure of avoiding conflict is immediate.\nPurity (-5): The pleasure is 'impure' because it's tainted by the pain of your own unfair workload and silent resentment.\nFecundity (-5): This action may encourage the non-contributing members to repeat their behavior, leading to future problems. It doesn't produce future good."
    },
    optionB: {
      text: "Report the non-contributing members to the teacher. It's the honest thing to do, but it will likely fail them and create enemies.",
      hedonicScore: -12,
      analysis: "This action aligns with a Deontology perspective (upholding the rule of fairness), but it fares poorly in a strict Act Utilitarianism analysis. It creates certain, intense pain for two members and the pain of social friction for the entire group. While a Rule Utilitarian might argue this is good for the system in the long run, the immediate negative consequences are severe and widespread. The 'Fecundity' is negative, as it will lead to enmity and conflict, not more pleasure.",
      scoreExplanation: "Intensity (-8): The academic failure and social humiliation would be an intense pain for the two members.\nDuration (-4): The failed grade and broken friendships are long-lasting pains.\nFecundity (-4): The action will lead to more future pain in the form of broken relationships and ongoing conflict.\nExtent (-3): Pain affects two people directly and creates friction for the whole group.\nCertainty (-3): The pain caused by this action is almost 100% certain.\nPropinquity (-2): The pain is immediate and unavoidable.\nPurity (+12): The only positive is the strong, abstract pleasure derived from upholding 'justice' and fairness, though it is heavily outweighed by the immediate harm."
    },
    optionC: {
      text: "Confront the two members directly, give them an ultimatum to contribute within 24 hours or you will go to the teacher.",
      hedonicScore: 16,
      analysis: "This choice represents a sophisticated attempt to achieve the best possible utilitarian outcome. It introduces the lesser pain of confrontation in order to avoid the greater pains of either injustice (you doing all the work) or severe punishment (reporting them). It opens a path to the best outcome: a fairly completed project. Its main weakness is its low 'Certainty', as the confrontation may not work, but it is a responsible attempt to maximize overall utility for the group.",
      scoreExplanation: "Fecundity (+10): If successful, this action leads to the best possible future: a fair workload, a good grade for all, and a learned lesson.\nPurity (+8): It aims for a 'pure' outcome of justice and shared success, free from resentment or punishment.\nExtent (+5): If successful, it creates happiness for the entire group of four.\nIntensity (-5): The pain of confrontation can be high and unpleasant for everyone.\nCertainty (-4): The success of the confrontation is highly uncertain. If it fails, it could lead to increased conflict.\nPropinquity (-2): The potential pleasure is in the future, while the pain of confrontation is immediate.\nDuration (-1): The conflict could be short, but is still a negative."
    },
    optionD: {
      text: "Only do your part of the project perfectly and let the other parts remain incomplete. Your section will be great, but the overall project will be poor.",
      hedonicScore: -38,
      analysis: "This individualistic and retributive approach is a clear failure from any utilitarian perspective. It guarantees a poor outcome for the entire group, including yourself, thus maximizing pain rather than pleasure. It fails the 'Extent' test spectacularly, as it ensures unhappiness for the maximum number of people involved. It is an act of cutting off one's nose to spite one's face, a clear miscalculation in Consequentialism.",
      scoreExplanation: "Extent (-10): Everyone in the group, including you, receives the definite pain of a bad grade.\nCertainty (-8): It is almost certain that this strategy will lead to a bad overall result for everyone.\nIntensity (-8): The pain of a bad grade is high for everyone.\nDuration (-5): The negative mark on everyone's record is long-lasting.\nFecundity (-5): This act of sabotage will destroy group cohesion and lead to future conflict.\nPropinquity (-2): The failure is imminent and certain.\nPurity (0): The action produces no significant pleasure for anyone to offset the widespread and certain pain."
    },
    flashcard: {
      concept: "Rule Utilitarianism vs. Act Utilitarianism",
      definition: "Act Utilitarianism assesses each act individually for its outcome. Rule Utilitarianism assesses actions by whether they conform to a rule that, if generally followed, would create the most happiness. Reporting slackers might be supported by Rule Utilitarianism (maintaining fairness) even if the immediate act causes pain."
    }
  },
   {
    title: "The Cousin's Wedding",
    scenario: "Your close cousin's wedding is a multi-day event in your hometown. Attending the whole thing means missing a week of important lectures right before your final exams.",
    optionA: {
      text: "Skip the entire wedding to focus on your studies. Your academic future is the top priority.",
      hedonicScore: 7,
      analysis: "This choice prioritizes a long-term, 'fecund' pleasure (academic success) over a short-term, intense pleasure (family celebration). The Felicific Calculus requires weighing different types of pleasure. This choice causes immediate pain to your cousin and family ('Propinquity' is a negative) but is based on a rational calculation that your future well-being is a greater utility. It is a classic example of delayed gratification in service of maximizing long-term happiness.",
      scoreExplanation: "Fecundity (+12): A strong academic performance is highly 'fecund,' likely to lead to a chain of future pleasures like a better career.\nDuration (+10): The benefits of a secure academic future will last for a lifetime, a much longer 'duration' than the wedding.\nIntensity (-5): Your absence will cause intense emotional pain to your close cousin and family.\nExtent (-4): This pain affects your cousin, parents, and other close relatives, making its 'extent' widespread.\nPropinquity (-3): The pain you cause is immediate and certain, while the academic benefits are distant.\nCertainty (-2): The pain caused is certain, while the benefit from studying is not guaranteed.\nPurity (-1): Your academic success would be tainted by the pain you caused your family."
    },
    optionB: {
      text: "Attend the entire wedding. Family is more important than a few lectures you can catch up on later.",
      hedonicScore: 19,
      analysis: "This option maximizes immediate pleasure for a large number of people ('Extent') and strengthens family bonds, which itself has lasting value ('Fecundity'). The calculation here is that the risk of academic pain is uncertain and likely less intense than the certain pain your absence would cause. It's a choice that weighs the high 'Certainty' and 'Intensity' of collective, short-term joy over uncertain, individual, long-term goals.",
      scoreExplanation: "Extent (+10): A large number of family members will derive significant happiness from your presence.\nIntensity (+8): The collective happiness of a family wedding is a high-intensity pleasure.\nPropinquity (+5): The pleasure is immediate.\nDuration (+4): The joy of the event lasts several days, and the memories last much longer.\nFecundity (+2): Strengthening family bonds can lead to future happiness and support.\nCertainty (-5): There is a significant and certain risk of academic pain from missing a full week of lectures.\nPurity (-5): The pleasure of the wedding is mixed with the pain of academic stress."
    },
    optionC: {
      text: "Attend only the main wedding ceremony for one day, minimizing academic disruption.",
      hedonicScore: 36,
      analysis: "This is a highly effective utilitarian compromise that seeks to optimize the outcome by capturing the most critical pleasures while avoiding the most critical pains. You secure the primary pleasure for your family (your presence at the key moment) while minimizing the pain for yourself (missing a full week of lectures). This demonstrates a sophisticated application of the Principle of Utility by refusing a simple either/or choice and instead finding a third option that balances competing interests.",
      scoreExplanation: "Purity (+10): You almost completely avoid the pain of academic failure. This makes the outcome very 'pure'—pleasure with very little associated pain.\nIntensity (+8): You secure the most intense pleasure for your family (your presence at the key moment).\nExtent (+6): It provides significant happiness to your family while protecting your own crucial long-term interests.\nCertainty (+5): It secures the most certain pleasure (family sees you) while minimizing the most certain pain (missing all lectures).\nFecundity (+4): This responsible compromise strengthens family bonds and supports your academic future.\nDuration (+2): You provide lasting happy memories for your family with minimal long-term academic cost.\nPropinquity (+1): You get the pleasure of seeing family soon, without a long delay."
    },
    optionD: {
      text: "Attend the wedding but try to study during the functions, being present physically but not mentally.",
      hedonicScore: -22,
      analysis: "This action is likely to result in a net negative utility because it fails to achieve any goal effectively. You fail to provide the real pleasure of your engagement to your family (as you are distracted), and you fail to gain the pleasure of effective studying. The result is two low-quality experiences, a clear failure in maximizing utility. The 'Purity' is extremely low, as both activities are contaminated by the pain of the other.",
      scoreExplanation: "Purity (-8): The experience is highly 'impure'. You feel academic stress without family connection, and your family feels your distraction.\nIntensity (-5): The quality of pleasure for everyone involved (including you) is very low. No one gets your full attention.\nExtent (-4): You cause a subtle, frustrating pain for all your family members who want to connect with you.\nDuration (-2): This state of stressful distraction lasts the entire wedding.\nCertainty (-2): It is certain that this strategy will lead to a poor experience for everyone.\nPropinquity (-1): The pain of frustration is immediate for all.\nFecundity (0): This behavior could lead to misunderstandings and hurt feelings, causing future pain."
    },
    flashcard: {
      concept: "The 'Propinquity' Principle",
      definition: "'Propinquity' refers to the nearness or remoteness in time of the pleasure or pain. A pleasure that is closer is considered more valuable than one that is far off in the future, all else being equal."
    }
  },
  {
    title: "The Coaching Centre Choice",
    scenario: "You have two admission offers after your 10th boards. One is for a well-regarded local coaching centre. The other is for a more prestigious, highly competitive institution in a major city like Kota, known for producing top rankers but also for its high-pressure environment.",
    optionA: {
      text: "Choose the local centre to stay near family and have a balanced, less stressful student life.",
      hedonicScore: 28,
      analysis: "This choice heavily favors the principles of 'Certainty' and 'Propinquity'. The pleasure derived from a stable home life and family proximity is immediate, guaranteed, and lasts a long time ('Duration'). It maximizes happiness for your parents ('Extent') and provides a stable, long-term, moderate pleasure for you. From a risk-averse Utilitarian perspective, eliminating the possibility of intense pain (loneliness, academic burnout) is a very strong reason to choose this.",
      scoreExplanation: "Certainty (+10): The pleasure and emotional security from staying home are almost 100% certain.\nPurity (+8): This pleasure is very 'pure', as it avoids the almost certain pain of loneliness and stress.\nDuration (+5): The pleasure of emotional security lasts throughout your crucial study years.\nExtent (+3): This decision creates significant, long-term happiness for both you and your parents.\nFecundity (+2): A stable environment is likely to lead to sustained academic performance and future happiness.\nIntensity (0): The pleasure is moderate, not intense.\nPropinquity (0): The pleasure is immediate."
    },
    optionB: {
      text: "Move to the big city for the prestigious institution, embracing the high-pressure environment for a better shot at a top rank.",
      hedonicScore: 9,
      analysis: "This is a classic high-risk, high-reward scenario where 'Intensity' and 'Fecundity' are pitted against 'Certainty'. The potential pleasure (top rank, prestigious college admission) is enormous, but its low probability makes it a gamble. A utilitarian might choose this if they believe the potential upside for their future is worth the significant risk of pain and failure. It's a choice that favors maximizing potential pleasure over minimizing potential pain.",
      scoreExplanation: "Intensity (+15): The potential for pleasure (a top rank) is extremely high.\nFecundity (+15): Success here is highly 'fecund,' likely leading to a lifetime of opportunities and further happiness.\nCertainty (-10): The massive pleasure is far from certain, so its value must be heavily discounted.\nPurity (-5): The potential success is mixed with the definite pain of stress and homesickness.\nDuration (-3): The pain of loneliness and intense pressure is long-lasting, for two full years.\nPropinquity (-2): The pain of leaving home is immediate, while the pleasure is distant.\nExtent (-1): The immediate pain of you leaving will negatively affect your parents."
    },
    optionC: {
      text: "Try to enroll in the distance learning program of the prestigious institution, getting the brand name while staying home.",
      hedonicScore: 17,
      analysis: "This represents a strategic attempt to optimize utility by combining the best elements of both choices (prestigious coaching + family proximity). However, its success is not guaranteed. The effectiveness of distance learning might be lower than the in-person experience, reducing the potential 'Intensity' of the pleasure (a top rank). It's a clever strategy, but its value is discounted by its 'Certainty' being lower than option A.",
      scoreExplanation: "Purity (+10): This is a proactive attempt to get the pleasure of prestigious coaching without the associated pain of leaving family.\nExtent (+5): Like staying home, it secures the happiness of your parents while you pursue your goals.\nFecundity (+4): This could lead to a great result without the sacrifice.\nPropinquity (+3): You get the benefit of staying home immediately.\nCertainty (-3): The quality of the remote program may not be as good, making the positive outcome of a top rank less certain.\nIntensity (-1): The pleasure might be less intense without the competitive, motivating in-person environment.\nDuration (-1): The benefits may not be as long-lasting if the education is suboptimal."
    },
    optionD: {
      text: "Reject both and take a gap year to self-study, aiming for an even better institute next year.",
      hedonicScore: -8,
      analysis: "This choice represents a poor utilitarian calculation. It rejects a certain good (local coaching) and a probable good (prestigious coaching) for a highly uncertain and distant one. The pain of social isolation and a year of unstructured struggle is immediate and certain. The Principle of Utility would strongly question giving up a guaranteed good for the small chance of a perfect best, as the immediate and certain pain likely outweighs the discounted value of the future potential pleasure.",
      scoreExplanation: "Certainty (-5): It exchanges a certain admission for the high uncertainty of a better outcome next year.\nIntensity (-4): The pain of stress and social isolation during a gap year is high.\nDuration (-3): This pain lasts for a full year.\nPropinquity (-2): It pushes any potential pleasure far into the future, while introducing the pain of stress and uncertainty right now.\nPurity (-1): It introduces the immediate pain of a gap year, with no guaranteed pleasure to offset it.\nExtent (-1): The stress and uncertainty affects both you and your family.\nFecundity (+8): The only potential upside is the 'fecundity' of aiming for a better future, but it's a long shot."
    },
    flashcard: {
      concept: "The 'Certainty' Principle",
      definition: "'Certainty' is the likelihood that the pleasure or pain will actually occur. A certain pleasure is more valuable than an uncertain one. This is a key factor when comparing a safe local option to a risky one far away."
    }
  },
  {
    title: "The Choice of Stream",
    scenario: "After your 10th boards, your parents are pressuring you to take the Science stream to become an engineer or doctor. You are passionate about Humanities and want to be a journalist.",
    optionA: {
      text: "Agree to take Science to make your parents happy and secure your future, giving up on your interest in Humanities.",
      hedonicScore: -42,
      analysis: "While this creates intense, immediate pleasure for your parents ('Extent'), it generates immense, long-term pain for you. This highlights a key debate in Utilitarianism, addressed by John Stuart Mill: the idea of 'higher pleasures'. Mill argued that pleasures of the intellect, emotion, and autonomy (like choosing a career path) are of a higher quality and thus more valuable than 'lower pleasures' (like social harmony or avoiding conflict). Sacrificing a higher pleasure for a lower one results in a net loss for overall utility.",
      scoreExplanation: "Duration (-15): The pain of studying subjects you dislike is very long-lasting, potentially for your entire career.\nIntensity (-10): This choice creates intense pain for yourself.\nPurity (-10): The parents' happiness is profoundly 'impure,' as it is built directly on your deep and lasting unhappiness.\nFecundity (-5): A career you dislike is unlikely to lead to future happiness or success.\nPropinquity (-2): The pain for you starts immediately.\nCertainty (0): The pain for you is certain.\nExtent (0): While it makes your parents happy, the intense and long-lasting pain is concentrated on you."
    },
    optionB: {
      text: "Insist on taking Humanities, explaining your passion and career plans, and prepare for the conflict.",
      hedonicScore: 21,
      analysis: "This action will cause significant immediate pain and conflict, a clear short-term negative. However, from a Millian utilitarian perspective, it is the correct choice. It upholds the 'higher pleasure' of autonomy and the potential for a life of authentic happiness. The calculation is that the long-term, high-intensity pleasure of a chosen, fulfilling career outweighs the short-term, albeit intense, pain of family conflict. It is a choice that prioritizes the quality and 'Duration' of happiness over the immediate avoidance of pain.",
      scoreExplanation: "Duration (+15): The potential happiness from a career you love is immense and long-lasting.\nIntensity (+10): The potential long-term happiness from a fulfilling career is very intense.\nFecundity (+8): A fulfilling career is likely to produce more future happiness.\nPropinquity (-8): The immediate pain of family conflict is intense, certain, and happens now.\nPurity (-5): The path to your happiness is mixed with the definite pain of conflict.\nExtent (-5): The immediate pain of conflict affects the whole family.\nCertainty (-4): The success of your chosen career is not certain."
    },
    optionC: {
      text: "Ask for a few weeks to 'think it over', using the time to find a compromise, like taking Commerce as a middle ground.",
      hedonicScore: 2,
      analysis: "This is a stalling tactic that has some utility by avoiding immediate pain ('Propinquity'), but it ultimately solves nothing and may even introduce the new pain of choosing a path you're not passionate about. It has a very low 'Certainty' of leading to a good outcome and may be seen as a weak choice that simply postpones an inevitable, painful decision. While avoiding immediate pain is a factor in Hedonism, it is a minor one compared to finding a long-term solution.",
      scoreExplanation: "Propinquity (+5): Its main and only benefit is that it pushes the certain pain of conflict further away into the future.\nPurity (-1): It creates no new pleasure if you are not interested in Commerce either; it only delays a known pain.\nExtent (-1): It creates a state of prolonged uncertainty for the whole family.\nFecundity (-1): Delaying a decision rarely makes it better and may lead to more entrenched positions.\nCertainty (0): It's very uncertain if this will lead to a better outcome in the long run.\nIntensity (0): The pleasure from this choice is very low for everyone; it is merely a delay.\nDuration (0): The delay is short-lived, and the underlying problem remains."
    },
    optionD: {
      text: "Secretly enroll in online humanities courses while taking Science, hoping to manage both and switch later.",
      hedonicScore: -33,
      analysis: "This choice secures no real pleasure but guarantees pain. The stress of managing two demanding streams of study will be immense, and the deceit will cause constant anxiety. The 'Extent' of the pain caused when this is discovered would be significant. It's an act of self-deception that fails to respect your own limits or your parents' trust. A true utilitarian calculation must include all consequences, including the high probability of burnout and failure in both fields.",
      scoreExplanation: "Purity (-10): Your academic life will be forever mixed with the pain of guilt, exhaustion, and fear.\nIntensity (-8): The stress of a double life and the fear of discovery are intense.\nDuration (-5): The pain of stress and deceit would last for a long time.\nCertainty (-4): The probability of burnout and failure in both streams is very high.\nExtent (-3): It causes extreme stress to you and will eventually cause great pain to your parents upon discovery.\nFecundity (-2): This act of deceit and overwork will lead to more pain in the future (burnout, failure, broken trust).\nPropinquity (-1): The pain of stress is immediate."
    },
    flashcard: {
      concept: "Higher vs. Lower Pleasures",
      definition: "Philosopher John Stuart Mill, a utilitarian, argued some pleasures (like pursuing a passion, intellectual stimulation) are 'higher' quality than others (mere social approval). A choice might cause short-term pain but uphold a 'higher' pleasure like autonomy."
    }
  },
  {
    title: "The Financial Burden",
    scenario: "You want to join a special, expensive coaching program for an entrance exam like CLAT or NID. It would require your family to take out a loan, putting them under significant financial stress.",
    optionA: {
      text: "Take the loan. The future returns from a top college will eventually make the whole family better off.",
      hedonicScore: 14,
      analysis: "This is a high-stakes utilitarian gamble. It causes definite, long-term pain (financial stress with high 'Duration' and 'Intensity') for an uncertain, though potentially high, pleasure of future success. The 'Fecundity' is high if you succeed, as your success could lead to great happiness for the whole family. However, the low 'Certainty' of that success is a major risk factor that must be heavily discounted in any proper Felicific Calculus.",
      scoreExplanation: "Fecundity (+15): A great education can be highly 'fecund,' leading to immense future pleasure for the whole family.\nIntensity (+10): The potential pleasure of a successful, high-paying career is very intense.\nCertainty (-8): The pleasure required to offset the pain is uncertain. This is a very risky bet.\nDuration (-4): The pain of the loan is long and certain.\nPurity (-4): Your success would be built on the pain of your family's financial stress.\nExtent (-3): The pain of financial stress affects your entire family.\nPropinquity (-2): The pain of the loan is immediate, while the pleasure is distant."
    },
    optionB: {
      text: "Drop the plan and opt for a cheaper, less prestigious coaching option to avoid burdening your family.",
      hedonicScore: 26,
      analysis: "This option prioritizes the avoidance of certain, intense pain for the family over the pursuit of uncertain, high pleasure for yourself. This is a risk-averse choice that aligns well with the Principle of Utility by securing a moderate amount of definite happiness for the largest number of people. It is a choice that values the 'Certainty' of avoiding harm over the possibility of achieving a greater good.",
      scoreExplanation: "Certainty (+10): It avoids a certain, intense, and long-lasting pain for your family.\nPurity (+8): The pleasure of your education is 'pure' in that it is not tainted by the pain of your family's financial suffering.\nExtent (+5): It prioritizes the financial and emotional well-being of the entire family unit.\nDuration (+2): The peace of mind from avoiding debt is long-lasting.\nFecundity (+1): A stress-free environment can lead to better focus and future success.\nIntensity (0): The pleasure of family security is high.\nPropinquity (0): The pleasure of financial security is immediate."
    },
    optionC: {
      text: "Try to earn some money yourself through part-time work or tutoring, delaying the dream but aiming for self-sufficiency.",
      hedonicScore: 32,
      analysis: "This choice offers the highest potential utility by aiming to eliminate the pain component (the loan) entirely. It requires the lesser pain of delayed gratification ('Propinquity' is low). It creates the desired pleasure (your education) without causing significant pain to others, making it a highly 'pure' outcome. It demonstrates responsibility and foresight, which are themselves virtues that tend to lead to better long-term utilitarian outcomes.",
      scoreExplanation: "Purity (+12): This is the primary reason for its high score. It aims for the 'pure' pleasure of education without the accompanying pain of family debt.\nFecundity (+8): This path of hard work and responsibility is likely to build character and lead to more positive outcomes.\nIntensity (+5): The pleasure of achieving a goal through your own efforts is very high.\nDuration (+4): The skills and character built will last a lifetime.\nExtent (+4): This choice inspires your family and brings pride, a positive for everyone.\nCertainty (+1): While hard, this path is more certain than relying on a lucky break.\nPropinquity (-2): It delays the pleasure of starting the coaching program. This is its main drawback."
    },
    optionD: {
      text: "Look for a program with a full scholarship, even if it's not your first choice, to get good coaching without the debt.",
      hedonicScore: 23,
      analysis: "Similar to option C, this seeks to remove the pain of debt, which is a strong utilitarian move. It's a fantastic compromise, though it may result in a less intense pleasure if the program is not your ideal one. Its utility is high, but heavily dependent on the uncertain outcome of securing a scholarship. It's a great goal, but less of a concrete plan than working and saving.",
      scoreExplanation: "Purity (+10): Its main benefit is that it aims for the pleasure of education without the significant pain of family debt.\nExtent (+5): It avoids causing pain to your family.\nFecundity (+5): Securing a scholarship is a great achievement that can lead to future opportunities.\nCertainty (-5): Finding a full scholarship is very uncertain. The Felicific Calculus requires us to heavily discount the value of an outcome by its improbability.\nPropinquity (-1): The search for a scholarship may delay your plans.\nIntensity (0): The pleasure might be less intense if the course or institution is a significant compromise.\nDuration (-1): The benefits might be less if the program is not as good."
    },
    flashcard: {
      concept: "The 'Fecundity' Principle",
      definition: "'Fecundity' refers to the chance an action has of being followed by sensations of the same kind. An education that leads to a great career is highly 'fecund' because the initial pleasure (of learning) leads to more pleasures (wealth, stability)."
    }
  },
  {
    title: "The Moral Dilemma",
    scenario: "You see your best friend cheating on an important exam that could get them expelled if caught. The invigilator is not paying attention.",
    optionA: {
      text: "Pretend you saw nothing. Your loyalty to your friend is more important than the school's rules.",
      hedonicScore: -7,
      analysis: "This choice prioritizes the immediate pleasure of your friend and avoids the pain of confrontation. However, it fails a Rule Utilitarianism test: if 'ignoring cheating' became a universal rule, it would destroy the value of exams for everyone, causing widespread harm. Even from an Act Utilitarianism view, it's risky. You are enabling behavior that could lead to the much greater pain of your friend being caught and expelled later, a highly 'impure' and non-'fecund' outcome.",
      scoreExplanation: "Fecundity (-5): It risks a much greater future pain for your friend (expulsion if they are caught later or continue this behavior).\nExtent (-4): The act harms the entire school system by devaluing grades, a harm with great 'Extent'.\nPurity (-3): Your friend's pleasure of passing is 'impure,' as it's mixed with the constant fear of being caught.\nDuration (-2): The fear of being caught is long-lasting.\nPropinquity (+2): The benefit is immediate but minor.\nIntensity (+3): The immediate pleasure for your friend is low, as it's mixed with fear.\nCertainty (+2): It is uncertain if your friend will even benefit in the long run."
    },
    optionB: {
      text: "Anonymously report your friend to the exam authorities after the exam is over.",
      hedonicScore: -18,
      analysis: "This choice might align with a strict Deontology (upholding rules) but it causes certain, intense pain to your friend. The benefit to the wider community is abstract and diffuse, whereas the harm to your friend is concrete, severe, and certain. Act Utilitarianism would likely find this action causes far more measurable harm than good. The 'Intensity' of your friend's pain upon being expelled would be extreme, a massive negative weight in the calculation.",
      scoreExplanation: "Intensity (-10): The pain of being reported and possibly expelled is extremely intense for your friend.\nDuration (-8): The pain of expulsion and a ruined friendship is very long-lasting.\nFecundity (-5): This will lead to the destruction of a valuable friendship and create future pain and mistrust.\nCertainty (-3): The pain caused is certain.\nPurity (-2): Any abstract pleasure of 'upholding justice' is tainted by the severe and personal pain you cause.\nPropinquity (0): The pain would be inflicted soon after the act.\nExtent (+10): The pleasure gained by 'upholding the system' is abstract and spread thinly, while the pain inflicted is personal and intense."
    },
    optionC: {
      text: "Subtly try to signal your friend to stop, without drawing the invigilator's attention.",
      hedonicScore: 24,
      analysis: "This is a highly effective utilitarian act. It is a precise intervention designed to prevent multiple pains: the immediate harm of cheating, the potential greater harm of expulsion, and the pain of direct reporting or confrontation. It seeks to maximize good (fairness, friend's future) and minimize harm (punishment, conflict) for everyone involved. It is an elegant solution that balances loyalty with ethics.",
      scoreExplanation: "Purity (+8): It attempts to prevent all negative outcomes for both your friend and the system without introducing new pain like confrontation or betrayal.\nFecundity (+6): If successful, it not only avoids immediate harm but also preserves a friendship and potentially teaches a valuable lesson.\nIntensity (+5): It prevents a very intense negative outcome (expulsion).\nDuration (+4): It prevents a long-lasting negative mark on your friend's record.\nExtent (+2): It benefits your friend and the integrity of the exam.\nPropinquity (+1): The intervention is immediate.\nCertainty (-2): Its only drawback is that it might not work. Your friend might ignore you."
    },
    optionD: {
      text: "Cause a minor, unrelated distraction in the room to make the invigilator more alert, hoping your friend stops on their own.",
      hedonicScore: 11,
      analysis: "This is an indirect and creative attempt to solve the problem, which has some merit. However, it's less efficient than direct signaling. It introduces a small amount of disruption (a minor pain) to the entire room, thus negatively impacting the 'Extent'. It's a decent option but less surgically precise than option C, as its 'Certainty' of working is lower and it has minor negative side effects.",
      scoreExplanation: "Purity (+8): Like option C, it attempts to solve the problem without the direct pain of confrontation or betrayal.\nIntensity (+6): The potential positive impact is high (preventing expulsion).\nDuration (+3): It prevents long-term harm to your friend.\nExtent (-3): It introduces a small negative (the pain of distraction) to everyone else in the room.\nCertainty (-2): It is less certain to make your friend stop than a direct, subtle signal.\nFecundity (-1): It's less likely to teach a direct lesson to your friend.\nPropinquity (0): The effect is immediate, but less targeted."
    },
    flashcard: {
      concept: "Deontology vs. Utilitarianism",
      definition: "Deontology is an ethical theory that focuses on duties and rules (e.g., 'cheating is always wrong'). Utilitarianism, in contrast, focuses on the consequences. A utilitarian might weigh the harm of cheating against the harm of a friend being expelled."
    }
  },
   {
    title: "The Club Project Credit",
    scenario: "In your school's Science Club, the club president presents your innovative project idea at the annual science fair and takes full credit for it. You get no recognition.",
    optionA: {
      text: "Stay silent. You're just a club member and confronting the president could get you disliked or affect your position in the club.",
      hedonicScore: -14,
      analysis: "This choice prioritizes the avoidance of pain (conflict, losing favour) over the pursuit of pleasure (recognition, justice). While pragmatic, from a Utilitarian perspective it allows an injustice to stand. This creates the certain, personal pain of resentment. More importantly, it reinforces the president's negative behavior, making it more likely they will cause similar pain to others in the future (negative 'Fecundity'). Therefore, while it avoids immediate pain for you, it likely increases the total pain in the school over time.",
      scoreExplanation: "Fecundity (-8): Your silence encourages the president's bad behavior, making it more likely they will cause similar pain to future club members.\nIntensity (-5): The pain of resentment for you is high.\nDuration (-3): The feeling of injustice will likely last for a long time.\nCertainty (-2): The pain for you is certain.\nPropinquity (-1): The pain of feeling wronged is immediate.\nPurity (+3): The 'peace' you get is tainted by the pain of injustice.\nExtent (+2): While you avoid conflict, you allow a harm that could affect many others in the future."
    },
    optionB: {
      text: "Politely speak to the president in private, explaining how you feel and asking for recognition.",
      hedonicScore: 29,
      analysis: "This option is a courageous and well-calibrated attempt to maximize utility. It seeks to correct the injustice and gain the pleasure of recognition while minimizing collateral damage by avoiding public humiliation. It carries the risk of a negative reaction ('Certainty' is not 100%), but it is the most direct path to a just and positive outcome that restores your happiness without seeking to inflict punitive pain on the president. It aims for a 'pure' and 'fecund' result.",
      scoreExplanation: "Purity (+10): It directly addresses the injustice, aiming for the highest pleasure of fair recognition in a way that is free from malice or revenge.\nFecundity (+8): It creates an opportunity for the president to learn and for the club to become a fairer place, producing future good.\nIntensity (+5): The pleasure of receiving just credit is high.\nDuration (+4): The satisfaction of standing up for yourself is long-lasting.\nExtent (+3): A positive resolution benefits you, the president's character, and the club's future fairness.\nPropinquity (+1): You can address the issue quickly.\nCertainty (-2): The main drawback is the uncertainty of the president's reaction. They might become defensive or hostile."
    },
    optionC: {
      text: "Go directly to the teacher-in-charge to report the incident, with evidence if you have it.",
      hedonicScore: 3,
      analysis: "This 'nuclear option' may achieve justice for you, but it is likely to cause significant and intense pain for the president and create a hostile environment in the club. The resulting conflict could create more negative utility (widespread discomfort, broken relationships) than the original injustice. It's a high-risk move that fails the utilitarian test of minimizing overall harm, even if it corrects a specific wrong.",
      scoreExplanation: "Intensity (+10): The pleasure of receiving justice is high.\nExtent (-4): It creates widespread discomfort for others in the club, who may be forced to take sides.\nFecundity (-3): It will likely lead to a toxic club environment and burnt bridges, which are sources of future pain.\nDuration (-2): The negative feelings in the club could last a long time.\nCertainty (+5): The outcome is highly uncertain and could easily backfire, branding you as a troublemaker.\nPropinquity (-1): The conflict would be immediate.\nPurity (-2): The pleasure of justice is tainted by the significant pain and conflict it creates."
    },
    optionD: {
      text: "Find an opportunity in a future club meeting to casually mention that it was your idea, without directly accusing the president.",
      hedonicScore: 13,
      analysis: "A subtle and strategic move that attempts to claim your pleasure (recognition) without initiating direct conflict. It is less certain to work than direct confrontation and can be seen as passive-aggressive, but it's a clever way to balance risk ('Certainty') and reward. It is a less 'pure' action than direct conversation, but it might be a practical way to maximize your personal utility in a difficult power dynamic.",
      scoreExplanation: "Purity (+8): It's a low-risk way to attempt to claim the pleasure of justice without introducing the pain of direct conflict.\nPropinquity (+3): You can do this at the next meeting, so it's relatively soon.\nCertainty (-4): Its main weakness is its low 'Certainty' of success. Your comment may go unnoticed or be ignored.\nIntensity (+3): Even if successful, the pleasure gained would be less intense than a direct acknowledgment.\nDuration (+2): The recognition would be fleeting.\nExtent (+1): It may not be heard by all the relevant people.\nFecundity (0): It's less likely to lead to long-term change in the president's behavior."
    },
    flashcard: {
      concept: "Justice and Utility",
      definition: "While Utilitarianism aims for the 'greatest good,' critics argue it can sometimes ignore individual justice. Is it better for the group (the club) to be happy with a stolen idea if it causes one person (you) to suffer an injustice? This highlights a key tension in the philosophy."
    }
  },
  {
    title: "The Social Cause",
    scenario: "A local NGO needs volunteers for a weekend literacy drive for underprivileged children. Committing means sacrificing your only free time to relax and prepare for your tuition classes.",
    optionA: {
      text: "Commit fully, volunteering every weekend. The children's future is more important than your immediate comfort.",
      hedonicScore: 33,
      analysis: "This choice generates a massive amount of utility according to the Felicific Calculus. The 'Extent' is huge (many children benefit), and the 'Fecundity' is extremely high (literacy leads to a lifetime of opportunities and pleasures). It causes certain pain to you (stress, no free time), but the Principle of Utility states that this personal sacrifice is justified by the enormous good it produces for others. This is a model of altruistic action.",
      scoreExplanation: "Extent (+10): The positive impact on the children is immense.\nFecundity (+10): Literacy will likely lead to more future happiness for them and society.\nIntensity (+8): The pleasure of learning to read is a life-changing, high-intensity event for a child.\nDuration (+8): The benefits of literacy last a lifetime.\nCertainty (+5): The positive impact on the children you teach is high.\nPropinquity (+2): You see the positive results every weekend.\nPurity (-10): The score is tempered by the certain pain of stress and exhaustion it will cause you. The risk of burnout makes the good you do 'impure'."
    },
    optionB: {
      text: "Do not volunteer. You are over-stressed already and need to prioritize your own mental health and academics.",
      hedonicScore: 6,
      analysis: "This choice prioritizes self-preservation. From a sophisticated utilitarian view, this can be justified. If you burn out, your capacity to produce any good in the world (now or in the future) is diminished to zero. Therefore, securing your own well-being can be seen as a necessary prerequisite for future good actions. It produces no immediate good for others, but it prevents the certain future harm of your own collapse, thus preserving your potential for future utility.",
      scoreExplanation: "Fecundity (+8): A healthy and successful you has more potential ('fecundity') to create happiness in the future than a burnt-out one.\nCertainty (+5): It prevents the high 'certainty' of your own burnout, which would be a large negative utility.\nDuration (+3): Preserving your mental health has long-term benefits.\nPurity (-5): It feels selfish, which can be a form of 'impure' pain (guilt).\nExtent (-3): It produces zero pleasure for the children in the present moment.\nIntensity (-1): The pleasure of simply avoiding pain is not as intense as creating new pleasure.\nPropinquity (-1): The benefits are about preventing a future negative, not creating a present positive."
    },
    optionC: {
      text: "Volunteer for just one weekend to contribute a little without over-committing yourself.",
      hedonicScore: 25,
      analysis: "A classic utilitarian compromise and a very sensible choice. It allows you to generate a good amount of positive utility for the children ('Extent') without causing significant, long-term harm to yourself. It balances the 'greatest good' with personal sustainability, ensuring you can continue to be a source of positive utility in the future. It is a highly 'pure' action that generates good with minimal negative side effects.",
      scoreExplanation: "Purity (+10): It generates definite pleasure for others with only minimal and temporary pain for yourself. This makes it a very 'pure' action.\nExtent (+8): You still create a significant amount of good for a number of children.\nFecundity (+5): This represents a sustainable model of altruism. By not burning out, you preserve your ability to do more good in the future.\nIntensity (+4): The pleasure created for the children is still high.\nCertainty (+2): The positive impact is certain.\nPropinquity (+1): The good you do is immediate.\nDuration (-5): The positive impact is for a shorter duration than the full commitment."
    },
    optionD: {
      text: "Help the NGO by using your skills to manage their social media and fundraising online, which you can do from home.",
      hedonicScore: 41,
      analysis: "This could be the optimal utilitarian choice, demonstrating the concept of 'effective altruism.' It leverages your unique skills to potentially create an even greater impact ('Fecundity', 'Extent') than your physical presence could. If your online work leads to more donations and volunteers, you have multiplied your positive impact significantly. You have created far more utility than you could have alone, and you have done so while minimizing your personal pain (loss of free time).",
      scoreExplanation: "Extent (+12): This has the highest potential for 'Extent'. Good fundraising can help hundreds of children.\nFecundity (+10): The resources you generate can create a long-term, sustainable positive impact.\nPurity (+8): It minimizes your personal pain, making it a highly efficient action in terms of pleasure generated vs. pain incurred.\nIntensity (+5): The potential pleasure generated for many children through increased resources is massive.\nDuration (+4): The benefits of successful fundraising can last for years.\nCertainty (+1): The link between your work and the outcome is clear and likely to succeed.\nPropinquity (+1): You can start creating impact immediately from home."
    },
    flashcard: {
      concept: "The Principle of Utility",
      definition: "Also known as the 'greatest happiness principle,' this is the core idea of Utilitarianism. It states that actions are right in proportion as they tend to promote happiness, and wrong as they tend to produce the reverse of happiness."
    }
  },
  {
    title: "The Boarding School Choice",
    scenario: "You get admission into a prestigious boarding school for your 11th and 12th grade. Accepting means leaving your aging parents who, while not fully dependent, rely on you for emotional and logistical support.",
    optionA: {
      text: "Decline the admission to stay with your parents. Their well-being is your primary duty.",
      hedonicScore: 23,
      analysis: "This action produces certain, intense, and immediate pleasure for your parents, scoring highly on 'Certainty', 'Intensity', and 'Propinquity'. It prioritizes their happiness over the potential, uncertain pleasure of a better education. From a perspective that values certainty and minimizing harm to loved ones (a common interpretation of Utilitarianism), this is a strong choice. You are giving up a large potential pleasure for yourself to prevent a definite pain for them.",
      scoreExplanation: "Intensity (+10): It produces intense happiness and relief for your parents.\nCertainty (+8): The pleasure and security for your parents are guaranteed.\nExtent (+6): It creates a large amount of good for them.\nDuration (+4): This pleasure for them lasts for the two years you stay.\nPropinquity (+2): The pleasure for your parents is immediate.\nPurity (+1): Their pleasure is 'pure' and not mixed with worry.\nFecundity (-8): The score is lowered because you are giving up a significant opportunity for your own future growth and happiness."
    },
    optionB: {
      text: "Accept the admission and move. You need to build your own future, and you can call them every day.",
      hedonicScore: 8,
      analysis: "This choice causes certain, immediate pain to your parents for the sake of your own long-term pleasure and growth. The utilitarian calculation here is that your academic success will be so 'fecund' (leading to more and more pleasure via a good career) that it will eventually create more total happiness than is lost by your absence. Phone calls are a form of utility, but they may be a 'lower pleasure' than the 'higher pleasure' of your physical presence and companionship for your parents.",
      scoreExplanation: "Fecundity (+15): Your own future success has a high potential ('fecundity') to create immense and long-lasting pleasure for you and eventually your parents.\nDuration (+8): The benefits of a better education last a lifetime.\nIntensity (-8): The immediate and certain emotional pain caused to your parents is intense.\nExtent (-3): The pain is felt by both of your parents.\nCertainty (-2): Your future success is not certain, but their pain is.\nPurity (-1): Your potential pleasure is tainted by the definite pain you cause them.\nPropinquity (-1): The pain for your parents is immediate, while your success is distant."
    },
    optionC: {
      text: "Try to get admission to a day school in that city and convince your parents to move with you.",
      hedonicScore: -28,
      analysis: "This attempt at a compromise is likely to create more pain than it solves. Uprooting aging parents from their community, friends, and home is a significant harm with high 'Intensity' and 'Duration'. The pleasure of having them with you is unlikely to outweigh the immense pain of that disruption for them. It is an inefficient and potentially selfish solution that fails to properly account for their happiness in the utility calculation.",
      scoreExplanation: "Intensity (-10): The pain, stress, and loneliness of relocation for an elderly person are very intense.\nDuration (-8): The negative effects of this uprooting—loss of social network, familiar surroundings—would last for a very long time.\nCertainty (-5): The pain caused to them is almost certain.\nExtent (-3): The pain affects both parents deeply.\nPropinquity (-1): The pain of moving would be immediate.\nPurity (-1): The pleasure of having them with you is deeply 'impure,' as it is tainted by the immense pain you've directly caused them.\nFecundity (0): Uprooting them could lead to health issues and further unhappiness."
    },
    optionD: {
      text: "Postpone the admission by a year to arrange better support for your parents before you leave.",
      hedonicScore: 39,
      analysis: "This is the most responsible and sophisticated utilitarian choice. It seeks to secure the pleasure of the better education while actively and thoughtfully minimizing the pain your departure will cause. It demonstrates foresight and a commitment to maximizing utility for everyone involved, not just making a simple trade-off. This action has a high degree of 'Purity' because it is rooted in care and planning, aiming to achieve a positive outcome for all without causing undue harm.",
      scoreExplanation: "Purity (+12): It actively works to minimize the pain for all parties involved. By planning, you aim to get the great pleasure of education without the great pain of your parents' suffering.\nFecundity (+10): This responsible action allows you to pursue your own pleasure (education) while maintaining a strong family bond, leading to more future happiness.\nExtent (+8): This is the only option that genuinely considers and maximizes the long-term happiness of everyone involved.\nIntensity (+5): This leads to the high-intensity pleasure of both personal achievement and family harmony.\nDuration (+3): The positive outcomes are long-lasting for everyone.\nCertainty (+2): While not guaranteed, planning makes a positive outcome much more certain.\nPropinquity (-1): The only minor drawback is that the pleasure of your education is delayed by a year."
    },
    flashcard: {
      concept: "The 'Purity' Principle",
      definition: "'Purity' refers to the chance that a pleasure will not be followed by pain. A choice that creates happiness for you but guilt about your parents is 'impure.' A choice that satisfies everyone has high purity."
    }
  }
];
