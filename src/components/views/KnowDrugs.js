import React from "react";
import { FaTimes } from "react-icons/fa";
import { Animated } from "react-animated-css";
import logo from "../../images/Butterfly Icon-6.png";

const KnowDrugs = ({ goHome }) => {
  console.log("You are powerful");
  return (
    <>
      <div className="modal">
        <button className="back-btn" onClick={() => goHome()}>
          <FaTimes />
        </button>
        <div className="bodyText">
          <div className="wrapper">
            <Animated
              animationIn="rotateIn"
              animationOut="fadeOut"
              isVisible={true}
              className="titleFade"
            >
              <div className="miniLogo">
                <img src={logo} alt="butterfly-logo" />
              </div>
            </Animated>

            <h2 className="textH2">
              Know Drugs
              {/* <span className="nowrap">We Remember</span> */}
            </h2>

            <a
              target="_blank"
              href="https://www.dea.gov/sites/default/files/2020-06/Fentanyl-2020_0.pdf"
            >
              Fentanyl Drug Fact Sheet
            </a>

            <br />
            <a
              target="_blank"
              href="https://www.dea.gov/sites/default/files/2021-09/DEA_Fact_Sheet-Counterfeit_Pills.pdf"
            >
              Counterfeit Pills Fact Sheet
            </a>
            <br />
            <a
              target="_blank"
              href="https://www.dea.gov/sites/default/files/2020-06/Benzodiazepenes-2020_1.pdf"
            >
              Benzodiazepines Fact Sheet
            </a>
            <br />
            <a
              target="_blank"
              href="https://www.dea.gov/sites/default/files/2020-06/Cocaine-2020_1.pdf"
            >
              Cocaine Fact Sheet
            </a>
            <br />
            <a
              target="_blank"
              href="https://www.dea.gov/sites/default/files/2020-06/Methamphetamine-2020_0.pdf"
            >
              Methamphetamine Fact Sheet
            </a>
            <br />
            <a
              target="_blank"
              href="https://www.dea.gov/sites/default/files/2020-06/Marijuana-Cannabis-2020_0.pdf"
            >
              Marijuana/Cannabis Fact Sheet
            </a>

            {/* <span className="nowrap">Letter to the Sausalito City Council</span>
            <p>
              Date: October 4, 2020 To: the Sausalito City Council, Office of
              the City Clerk, 420 Litho Street, Sausalito, CA 94965
            </p>
            <p>
              Regarding: Sausalito Municipality seeking operation of new
              Store-front Cannabis Retail business, as per The Marin IJ article
              from September 13, 2020
            </p>
            <p>
              Dear Mayor Susan Clevand-Knowles, Vice Mayor Ray Withy, Council
              members Joan Cox, Joe Burns and Jill James Hoffman, interim
              Council member Tom Reilly, and City Manager Adam Politzer,
            </p>
            <p>
              I am a Marin County resident since 1992, originally from Germany I
              fell in love with Marin County and the SF Bay area. One of my
              favorite eateries is Angelino’s with the view over SF bay , where
              my mother and I never missed coffee on the former Alta Mira deck
              during her many visits to California. My son grew up in Marin and
              was a student of the Kentfield School District and graduated from
              Redwood High School in 2012.
            </p>
            <p>
              I am writing to you to express why I am against the Cannabis
              Retail business in Marin County and Sausalito. I believe in
              Community Health as key for a well-functioning and healthy county.
              Science confirms the devastating impact of Cannabis legalization
              with easy access through dispensaries and its negative impact on
              community health and youth.
            </p>
            <p>
              Please note that I am not opposed to the use of cannabis for
              legitimate medicinal purposes and to treat very specific medical
              conditions as allowed under the Compassionate Use Act, 1996, and
              the Medical Marijuana Regulation and Safety Act, MMRSA. I also
              support vigorous research to find out more about cannabis use for
              such matters. Research for possibly re-classifying components of
              marijuana for medical use is legitimate, in contrast to demanding
              reclassification for the entire genre of marijuana, as it is a
              product that has no defined dose as it can be smoked or used in
              crude form. https://learnaboutsam.org/science/
            </p>
            <p>
              With this letter I compiled a list of relevant public health data
              that support my opposition to cannabis retail stores, some of them
              supporting counter-evidence in references to your IJ article.
              Latter include, “...provide maximum benefit to the city….and…we
              cannot discount the revenues...” (Joan Cox), “...lifting bans on
              dispensaries is past due…it’s a no-brainer” (Joe Burns), “...it
              would be a better fit for the Marinship area or north of
              Bridgeway...” (council), “..there could not be a better time to
              open a revenue-producing, brick-and-mortar cannabis store in
              Sausalito” (Resident Ford Scriba), “..I am more concerned about
              the sale of alcohol or oxycodone to minors than highly regulated
              cannabis dispensaries. The hypocrisy in our community is just over
              the top and I can’t sit back anymore” (Joe Burns), “... has seen
              the bad that comes from substance abuse…..still, supports the
              opening of a cannabis store….plenty of his friends and relatives
              use…and would be nice to get what they need….locally instead of
              driving to SF to Fairfax” (Bill Johnston, retired juvenile
              probation officer).
            </p>
            <p>
              Let’s educate the public: Marijuana is classified as a schedule 1
              drug--- as are heroin, LSD and “ecstasy”. Schedule 1 drugs have
              the highest risk for addiction and, according to FDA, have no
              medical benefit and cannot be prescribed by medical doctors. Note
              that drugs like cocaine, meth and oxycodone are schedule 2 drugs.
              https://www.dea.gov/drug-scheduling Most people do not know these
              important facts. Hence, the false claims that marijuana is safe,
              harmless and just helps one to relax, are 100% false. I have seen
              the devastating changes cannabis had for my son Alex and
              especially when mixed with other medications.
              https://www.drugabuse.gov/publications/drugfacts/marijuana
            </p>
            <p>
              Access to cannabis---Research shows that access to drugs increases
              their use. For example, 71% of 9th graders in Marin county report
              that it is “fairly to very easy” to have access to cannabis. 46%
              of Marin’s 9th graders say it is “very easy” to get cannabis.
              https://www.Marinprevetionnetwork.org. It is proven that today’s
              marijuana, especially with its high levels of THC, represents a
              growing and significant threat to public health and safety.
              https://www.drugabuse.gov/publications/drugfacts/marijuana. We do
              have to protect our kids from harmful substances that are heavily
              industry-backed and use false slogans for their harmful and
              addictive vaping and smoking products. Advertising and policies
              regarding recreational use of marijuana have become increasingly
              permissive.
              https://learnaboutsam.org/sam-president-kevin-sabet-featured-njs-asbury-park-press-issue/
              https://www.drugabuse.gov/news-events/nida-notes/2018/02/long-term-marijuana-use-associated-health-problems-later-in-life
              Matt Willis, Marin’s public health officer, responds to Marin’s
              Youth drug abuse crisis, “It takes a village and a true community
              effort to reshape community norms and with a lot of solid science,
              a lot of heart, we can support our teens.” Substance abuse can
              lead addiction, and a vicious cycle of increased demand for such
              toxins, hence a higher toll on our health care and criminal
              system. Opening cannabis store fronts increases accessibility for
              youth and as data show, increased use and addiction.
              https://www.drugabuse.gov/publications/research-reports/prescription-opioids-heroin/increased-drug-availability-associated-increased-use-overdose
            </p>
            <p>
              2020 has been extremely challenging ---Our communities deal with
              increased substance and alcohol use since Covid-19. Since covid,
              my son Alex could no longer see his addiction doctor in person but
              per phone call only, even though data indicate that vulnerable
              populations need face-to-face medical support and consultation for
              optimal outcome. The CDC reports increased substance abuse, and
              elevated suicidal ideation, especially among youth.
              https://www.cdc.gov/mmwr/volumes/69/wr/mm6932a1.htm During
              covid-19 increased access and false cannabis advertisement
              propaganda can create relapse among teens and young adults who are
              already struggling. Alcohol sales alone have increased by 250%.
              https://www.ehstoday.com/health/article/21134240/a-pandemic-within-a-pandemic-substance-abuse-rises-amid-covid{" "}
            </p>
            <p>
              Marin County has a long history with substance abuse---our social
              norms allow for widespread acceptance and use of cannabis. My son
              told me that it is easy to buy drugs in high schools and that he
              knew of several parents who use cannabis. Matt Willis talks about
              an ongoing public health crisis with the number of teen drug and
              alcohol use are way higher than the state average.
              https://www.Marinpreventionnetwork.org Marin’s teens have been
              smoking, vaping, eating and drinking cannabis at high rates
              https://marinhealthyyouthpartnership.org/cannabis We score top in
              regards of healthy county in CA but poorly regarding substance use
              and racial disparities. Marin scores 48th out of 58 in high rates
              of binge drinking.
              https://www.marincounty.org/main/county-press-releases/press-releases/2019/hhs-healthiestcounty-031919
              Overdose deaths continue to rise and the leading cause of
              accidental death in Marin is drug overdose with a majority of
              these from opioids. https://discovery.cdph.ca.gov/cdic/oddash/
              This is a major problem in our county, as 44% of 11th graders in
              Marin county report substance use of any type in the past month,
              compared to 29% in California. Additionally 46% of 9th graders
              report that it is very easy to get cannabis. Finally 31% of 11th
              graders say that they have driven a car after using alcohol or
              other drugs or been driven by a friend who has used alcohol or
              other drugs. https://www.marinpreventionnetwork.org/ California
              Healthy Kids Survey has shown Marin cannabis use among high school
              students is significantly higher than their peers elsewhere in
              California, with 11th graders 130% and 9th graders 46% higher.
              https://www.healthyyouthpartnership.org According to Marin County
              Civil Grand Jury, nearly half of Marin County 11th graders drink
              alcohol. In addition, one third of these students binge drink, the
              highest rate in California.
              https://www.marinhealthyyouthpartnerships.org/alcohol
            </p>
            <p>
              Cannabis and the teen brain---Marijuana use directly affects the
              brain — Developing brains under age 25 are especially susceptible
              to all of the negative effects of marijuana and other drug use.
              https://learnaboutsam.org/the-issues/marijuana-mental-health/ The
              Adolescent Brain Cognitive Development Study is the largest
              long-term study of brain and cognitive development in children
              across the US.
              https://www.drugabuse.gov/drug-topics/adolescent-brain. Marijuana
              can cause permanent IQ loss of as much as 8 points when people
              start using it at a young age.
              https://www.drugabuse.gov/publications/research-reports/marijuana/what-are-marijuanas-long-term-effects-brain{" "}
            </p>
            <p>
              Mental Health---Frequency of marijuana use and higher THC potency
              can worsen symptoms of depression overtime, and daily marijuana
              use among youth who begin before the age of 17 significantly
              increases the risk of suicide attempts. Marijuana use can increase
              the risk of developing psychosis 5-fold. Moreover Marijuana use
              has a 6-fold increased risk of suicide.
              https://learnaboutsam.org/the-issues/marijuana-mental-health/{" "}
            </p>
            <p>
              Cannabis Addiction---Marijuana use can lead to marijuana use
              disorder, which takes the form of addiction in severe cases.
              People who begin to use marijuana before the age of 18 are four to
              seven times more likely to develop a marijuana use disorder than
              adults.
              https://www.drugabuse.gov/publications/research-reports/marijuana/marijuana-addictive
              699,000 youth aged 12-17 have an addiction to marijuana in 2019 –
              representing 187,000 new youth with a Cannabis use Disorder in
              2019 versus 2018. Overall, more than 4.8 million people aged 12 or
              older reported Marijuana Use Disorder in 2019, up from 4.4 million
              in 2018. These survey findings are startling and my research
              proves llittle doubt that the commercialization and normalization
              of today’s high potent THC products is the key contributor to our
              country’s addiction rates.
              https://learnaboutsam.org/new-hhs-data-shows-marijuana-usage-increases-across-the-board-especially-youth-marijuana-addiction/
            </p>
            <p>
              THC Vaping crisis---Both the FDA and CDC have confirmed the
              country’s widespread marijuana vaping crisis. Very shocking!
              https://www.cdph.ca.gov/Programs/CCDPHP/Pages/Vaping-Health-Advisory.aspx
              And in Marin vaping among seventh, ninth, and eleventh graders has
              more than doubled in the past two years, with 47% of 11th graders
              admitting to having vaped. Those numbers may actually be higher,
              as teens notoriously under-report on these types of surveys.
              https://mail.google.com/mail/u/0/#inbox/QgrcJHsNnjqBJXJbrLvkxzRdlqxXqNBVMmV?projector=1&messagePartId=0.1
            </p>
            <p>
              Vaping-related lung illnesses are indeed tied to the "legal"
              marijuana market. In a recent study, the CDC found that 16 percent
              of marijuana vaping devices implicated in the epidemic were
              obtained from commercial sources, such as medical or recreational
              dispensaries. The marijuana industry has been quick to point the
              finger at black market products, but numerous deaths and cases of
              illness have been tied to "legal" dispensaries, which completely
              undercuts this talking point.
              https://learnaboutsam.org/potvapingcrisisfacts/{" "}
            </p>
            <p>
              A 2019 CDC report found that over a quarter of American high
              school students had vaped in the past month, all told, an
              estimated 8 million adults and 5 million middle and high schoolers
              are now doing it.
              https://nymag.com/intelligencer/2020/02/vaping-health-crisis.html
            </p>
            <p>
              According to the University of Michigan Monitoring the Future
              survey of American youth, between 2017 and 2018, the percentage of
              eighth and tenth graders who report “vaping” marijuana has
              increased by 63%.
              https://learnaboutsam.org/comprehensive-report-on-impact-of-marijuana-legalization
              / One recent Stanford study shows that Vaping is linked to
              Covid-19 risk in teens and young adults. Communities have faced
              mental health challenges related to Covid-19-associated morbidity,
              mortality and mitigation activities.
              https://med.stanford.edu/news/all-news/2020/08/vaping-linked-to-covid-19-risk-in-teens-and-young-adults.html
              In the last 2 years, vaping has increased by 218% among middle
              schoolers and 135% among high schoolers. 97% of kids who vape use
              flavors. Teens are 7x more likely to vape nicotine than adults.
              Marijuana vaping among youth has increased by 58% in just a single
              year.
              https://www.flavorshookkids.org/?gclid=Cj0KCQjwwuD7BRDBARIsAK_5YhWFdA35mqvf72mlmc7wZ5bUmW51IlPx4cULXnBptTrZgfKyk-Y7dzgaAvpzEALw_wcB
            </p>
            <p>
              Alcohol and Marijuana---the psychoactive components of marijuana
              can remain in the body for days or weeks, impairing neurological
              function and reaction times leading to car accidents long after
              use. By itself, both marijuana and alcohol impair driving. Users
              frequently do both, and this combination is especially dangerous,
              as the interaction of these two drugs is synergistic and not
              additive, potentially leading to wild impairment.
              https://pubmed.ncbi.nlm.nih.gov/12404625/
            </p>
            <p>
              Stoned Driving and driving fatalities---Cannabis use increases the
              risk for car accidents. In Washington the percentage of THC
              positive drivers has doubled since legalization.
              https://newsroom.aaa.com/2020/01/fatal-crashes-involving-drivers-who-test-positive-for-marijuana-increase-after-state-legalizes-drug/
              Marijuana-related traffic deaths increased 66% in a four-year
              period since legalization. Colorado saw a 40 percent increase in
              fatal crashes between 2013 and 2016, and a 145 percent increase in
              the number of marijuana-impaired drivers involved in fatal crashes
              in the same period.
              https://learnaboutsam.org/sam-statement-denver-posts-new-stoned-driving-analysis/
            </p>
            <p>
              Medical marijuana is not a substitute to opioids in pain
              treatment---Evidence demonstrates that medical marijuana use will
              not curb the opioid epidemic. I have seen that dilemma in my work
              as a chronic pain specialist. There is further evidence that
              marijuana is a companion drug rather than substitution drug and
              that marijuana use may be contributing to the opioid epidemic
              rather than improving it.
              https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6140166/ People who
              use cannabis had greater pain and lower self-efficacy in managing
              pain, and there was no evidence that cannabis reduced pain
              severity.
              https://www.thelancet.com/journals/lanpub/article/PIIS2468-2667(18)30110-5/fulltext
            </p>
            <p>
              Marijuana use as a gateway drug---Peer-reviewed research has
              revealed early marijuana use more than doubles the likelihood of
              illegal non-marijuana drug use later in life (Olfson, Wall, Liu, &
              Bianco, 2017; Secades-Villa, Garcia-Rodriguez, Jin, Wang, &
              Bianco, 2015). According to National Survey on Drug Use and
              Health, 95% -97% of people who used cocaine or heroin started with
              marijuana (NSDUh, 2018). Sadly, my son had to live through this
              experience. Data suggests that exposure to alcohol and tobacco
              advertising is associated with increased consumption, especially
              for youth (Smith &Fox, 2009) and research shows similar patterns
              related to marijuana advertising. (D’Amico et al, 2015). The study
              investigates the on-line advertising practices of dispensaries to
              protect youth against health claims that lack sufficient evidence.
              https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6177324/
            </p>
            <p>
              PROP 64 false claims---the new bill allowed for commercialization
              of the THC industry and hook young users, a strategy mirrored by
              Big Tobacco. www.learnaboutsam.org/drkevinsabet. THC,
              tetrahydrocannabinol, the psychoactive, chemical part of the
              cannabis plant that causes the “high”, contributes to psychosis,
              addiction and suicide. Today’s dangerously high THC content is
              packed as harmless edibles like gummy bears, ice creams, sodas and
              cookies. It seems criminal to me that the market offers products
              with up to 99% THC concentrates, such as waxes, shatters and dabs.
              Experts warn of hazardous long-term health effects. We need to
              educate the public and save our children.
            </p>
            <p>
              Marijuana related crimes and juvenile offenses---The National
              Institute of Health showed that marijuana dispensaries were linked
              to increased property crimes in nearby areas (Freisthler, Gaidus,
              Tam, Ponicki, & Gruenewald, 2017). Misdemeanor and vehicle thefts
              have dramatically increased since legalization. The Boulder Police
              Department reported a 54% increase in public consumption of
              marijuana citations since legalization (Boulder Police Department
              [BPD], 2017).
              https://learnaboutsam.org/wp-content/uploads/2018/03/SAM-Lessons-Learned-From-Marijuana-Legalization-Digital.pdf
            </p>
            <p>
              The black market and Increase in Illegal Marijuana growth
              ---Criminal activity has only been amplified as highway
              interdiction seizures and confiscation of illegal marijuana
              growing operations become increasingly common.
              https://learnaboutsam.org/dea-announces-massive-increase-in-marijuana-seizures-mostly-driven-by-illegal-grows-in-california/
              Colorado has seen 50% increase in illegal grow operations across
              rural areas in the state (Stewart, 2017), law enforcement
              confiscated 7,116 pounds of marijuana, carried out 252 felony
              arrests, and made 346 highway interdictions of marijuana (RMHIDTA,
              2017), the U.S. mail system has also been affected by the black
              market, seeing an 844% increase in marijuana seizures (RMHIDTA,
              2017).
              https://learnaboutsam.org/wp-content/uploads/2018/03/SAM-Lessons-Learned-From-Marijuana-Legalization-Digital.pdf
            </p>
            <p>
              Increase work place problems---the legalization of marijuana has
              affected the work force and business in general. According to
              Quest Diagnostics, 47% of the US workforce tested positive for
              oral marijuana between 2013 and 2015
              https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6837267/
            </p>
            <p>
              Tax revenues---Proponents of legalization predicted a tax windfall
              of #1 billion a year, the actual figure for the fiscal year ended
              in June is $288 million.
              https://www.latimes.com/business/story/2019-10-17/california-cannabis-taxes
              The commercialization of marijuana has been profitable for the
              industries such as Big Tobacco, yet tax revenues are falling short
              and serious, costly consequences abound. It is time to admit that
              marijuana legalization is a failed policy.” States with legal
              marijuana do not bring in big tax revenues, California still fails
              to meet its target.
              https://learnaboutsam.org/sam-statement-marijuana-industry-report-colorado-marijuana-tax-revenue/
            </p>
            <p>
              Cannabis store in proximity to Marin City---Researchers point out
              that the marijuana industry has taken advantage of vulnerable
              communities. The District of Columbia saw public consumption and
              distribution arrests nearly triple and a disproportionate number
              of those marijuana-related arrests occur among African-Americans.
              It reflects poor ethics and strategy to consider a dispensary in
              close proximity to our vulnerable community in Marin City.
              https://learnaboutsam.org/comprehensive-study-finds-marijuana-legalization-drives-youth-use-crime-rates-black-market-harms-communities-color/
            </p>
            <p>
              Conclusion: I have watched with alarm the growth of a for-profit
              commercial marijuana industry focused on profits and compromising
              the health and lives of our teens and adolescents. I am very
              concerned by the unfounded claims of marijuana as a cure for the
              opioid crisis and a medical cure for many conditions. We continue
              to see significant increases in ER visits, Cannabis Use Disorder,
              school-drop-outs, car accidents, increased crime and a host of
              other problems. I urge you to seriously do your own research and
              stop considering cannabis store fronts in order to prevent access,
              further harm and to protect our kids.
            </p>
            <p>
              What has led me to the path of advocacy On April 3, 2020, my
              25-year-old son Alex Movahedi died from an accidental Fentanyl
              overdose. Alex suffered from anxiety and depression and began to
              self-medicate with Xanax at age 19, which led to the downward
              spiral of a devastating disease, addiction. He had explored
              various forms of cannabis to dampen anxiety and insomnia, but
              gradually needed higher doses of both, Xanax and cannabis. Three
              months after he began chemical dependency treatment, one wrong
              street drug dose ended his life. Our plan was to travel to Europe
              together when he became sober. Instead, I am now left to honor
              Alex’s life through advocacy and wish that no other family has to
              go through the devastating loss of a child. If one young life can
              be saved from such tragedy, my new journey is worthwhile. Alex was
              an amazing, big-hearted, warm, intuitive, generous human being
              with a vast soul. He loved basketball, fishing, nature hikes,
              photography, his dog, ethnic foods and is remembered as a loyal
              friend who refer to him as the “Big Friendly Giant”. His oldest
              friend since first grade said of him, “everyone needs to have a
              friend like Alex in his life”. I miss Alex’s 6’4 tall presence,
              his bear hugs and warm smile. He is my shining light from here on.
            </p>
            <span className="nowrap">-Marion Kregeloh</span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowDrugs;
