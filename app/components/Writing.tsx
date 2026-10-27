'use client';

import { useState } from 'react';

const YO_VIZAG_CATEGORIES = ['All', 'City News', 'Heritage', 'Travel', 'Entertainment', 'Food & Culture', 'Society'];

const CATEGORY_COLOR: Record<string, string> = {
  'City News':       '#ef4444',
  'Heritage':        '#a855f7',
  'Travel':          '#22c55e',
  'Entertainment':   '#3b82f6',
  'Food & Culture':  '#f59e0b',
  'Society':         '#ec4899',
};

const YO_VIZAG_ARTICLES = [
  { title: '8 movies releasing on OTT in the last week of December for an eventful weekend binge', url: 'https://www.yovizag.com/8-movies-releasing-on-ott-in-the-last-week-of-december-for-an-eventful-weekend-binge/', date: 'Dec 26, 2023', category: 'Entertainment' },
  { title: 'Visakhapatnam theme parks take center stage as GVMC commissioner checks progress', url: 'https://www.yovizag.com/visakhapatnam-theme-parks-take-center-stage-gvmc-commissioner-checks-progress/', date: 'Dec 27, 2023', category: 'City News' },
  { title: 'Three arrested in Visakhapatnam narcotics operation, police officers applauded', url: 'https://www.yovizag.com/three-arrested-in-visakhapatnam-narcotics-operation-police-officers-applauded/', date: 'Dec 27, 2023', category: 'City News' },
  { title: 'Journey through pages: life-changing books for a week of inspiration and self-discovery', url: 'https://www.yovizag.com/journey-through-pages-life-changing-books-for-a-week-of-inspiration-and-self-discovery/', date: 'Dec 27, 2023', category: 'Entertainment' },
  { title: 'Vamsikrishna Srinivas quits YSRCP, joins Jana Sena Party', url: 'https://www.yovizag.com/vamsikrishna-srinivas-quits-ysrcp-joins-jana-sena-party/', date: 'Dec 27, 2023', category: 'City News' },
  { title: 'Songs that went viral in India in 2023', url: 'https://www.yovizag.com/songs-that-went-viral-in-india-in-2023/', date: 'Dec 27, 2023', category: 'Entertainment' },
  { title: 'Visakhapatnam rolls out mobile pink toilets for women', url: 'https://www.yovizag.com/visakhapatnam-rolls-out-mobile-pink-toilets-for-women/', date: 'Dec 27, 2023', category: 'City News' },
  { title: 'RINL turns dumping yard into serene Prakruthi Vanam park from scrap and waste material', url: 'https://www.yovizag.com/rinl-turns-dumping-yard-into-serene-prakruthi-vanam-park-from-scarp-and-waste-material/', date: 'Dec 28, 2023', category: 'City News' },
  { title: 'GVMC sanitation workers strike disrupts services in Visakhapatnam', url: 'https://www.yovizag.com/gvmc-sanitation-workers-strike-disrupts-services-visakhapatnam/', date: 'Dec 28, 2023', category: 'City News' },
  { title: 'Telugu cinema 2023 ends with a Salaar bang', url: 'https://www.yovizag.com/telugu-cinema-2023-ends-with-a-salaar-bang/', date: 'Dec 28, 2023', category: 'Entertainment' },
  { title: 'Uncertainty clouds Vizag CM camp office as AP High Court raises objection', url: 'https://www.yovizag.com/uncertainty-clouds-vizag-cm-camp-office-as-ap-high-court-raises-objection/', date: 'Dec 28, 2023', category: 'City News' },
  { title: 'Charting your path: 8 New Year resolutions for 2024', url: 'https://www.yovizag.com/charting-your-path-8-new-year-resolutions-for-2024/', date: 'Dec 28, 2023', category: 'Society' },
  { title: 'Visakha Steel General Hospital turns 32 years, treats half a million patients in 2022–2023', url: 'https://www.yovizag.com/visakha-steel-general-hospital-turns-32-years-treats-half-million-patients-in-2022-2023/', date: 'Dec 28, 2023', category: 'City News' },
  { title: 'AP Governor Abdul Nazeer kicks off Vikasit Bharat Sankalpa Yatra in Visakhapatnam', url: 'https://www.yovizag.com/ap-governor-abdul-nazeer-kicks-off-vikasit-bharat-sankalpa-yatra-in-visakhapatnam/', date: 'Dec 28, 2023', category: 'City News' },
  { title: 'Visakhapatnam police lay New Year guidelines for hotels, clubs and pubs in the city', url: 'https://www.yovizag.com/visakhapatnam-police-lay-new-year-guidelines-for-hotels-clubs-and-pubs-in-the-city/', date: 'Dec 28, 2023', category: 'City News' },
  { title: 'Hope for Visakhapatnam family: Commander Sugunakar Pakala among 8 ex-Navy personnel spared execution in Qatar', url: 'https://www.yovizag.com/hope-for-visakhapatnam-family-commander-sugunakar-pakala-among-8-ex-navy-personnel-spared-execution-in-qatar/', date: 'Dec 28, 2023', category: 'Society' },
  { title: 'Best Tamil movies of 2023', url: 'https://www.yovizag.com/best-tamil-movies-of-2023/', date: 'Dec 29, 2023', category: 'Entertainment' },
  { title: 'Are service roads the answer to two-wheeler woes and reduce accidents on NH16 in Visakhapatnam?', url: 'https://www.yovizag.com/are-service-roads-the-answer-to-two-wheeler-woes-and-reduce-accidents-on-nh16-in-visakhapatnam/', date: 'Dec 29, 2023', category: 'City News' },
  { title: 'Ring in 2024: top party destinations in Visakhapatnam to welcome the New Year', url: 'https://www.yovizag.com/ring-in-2024-top-party-destinations-in-visakhapatnam-to-welcome-the-new-year/', date: 'Dec 30, 2023', category: 'Travel' },
  { title: 'Vizag police tackle tough issues: 27% crime reduction in 2023', url: 'https://www.yovizag.com/vizag-police-tackle-tough-issues-27-crime-reduction-in-2023/', date: 'Dec 30, 2023', category: 'City News' },
  { title: 'RINL achieves milestone: Blast Furnace 3 Annapurna lights up for a bright future', url: 'https://www.yovizag.com/rinl-achieves-milestone-blast-furnace-3-annapurna-lights-up-for-a-bright-future/', date: 'Dec 30, 2023', category: 'City News' },
  { title: 'Best Telugu movies of 2023', url: 'https://www.yovizag.com/best-telugu-movies-of-2023/', date: 'Dec 30, 2023', category: 'Entertainment' },
  { title: 'Your guide to top OTT movies & web series in January 2024', url: 'https://www.yovizag.com/your-guide-to-top-ott-movies-webseries-in-january-2024/', date: 'Dec 30, 2023', category: 'Entertainment' },
  { title: 'Visakhapatnam traffic rules for a smooth New Year\'s Eve', url: 'https://www.yovizag.com/visakhapatnam-traffic-rules-for-a-smooth-new-years-eve/', date: 'Dec 30, 2023', category: 'City News' },
  { title: 'Grand welcome for Amrit Bharat Express in Visakhapatnam', url: 'https://www.yovizag.com/grand-welcome-for-amrit-bharat-express-in-visakhapatnam/', date: 'Jan 1, 2024', category: 'City News' },
  { title: 'Shocking minor gang rape case rocks Visakhapatnam', url: 'https://www.yovizag.com/shocking-minor-gang-rape-case-rocks-visakhapatnam/', date: 'Jan 1, 2024', category: 'Society' },
  { title: 'Vizag outsourced GVMC workers on strike, strict action raised by city police', url: 'https://www.yovizag.com/vizag-outsourced-gvmc-workers-on-strike-strict-action-raised-by-the-city-police/', date: 'Jan 2, 2024', category: 'City News' },
  { title: 'Another rape case in Vizag: 14-yo raped by her uncle, police arrest the accused', url: 'https://www.yovizag.com/another-rape-case-in-vizag-14-yo-raped-by-her-uncle-police-arrest-the-accused/', date: 'Jan 2, 2024', category: 'Society' },
  { title: 'Woman tests positive for COVID-19 in Visakhapatnam, dies in KGH; 20 test positive', url: 'https://www.yovizag.com/woman-tests-positive-for-covid-19-in-visakhapatnam-dies-in-kgh-20-test-positive/', date: 'Jan 2, 2024', category: 'City News' },
  { title: '6 movies releasing this Sankranti in theatres to watch for a fun weekend with your family', url: 'https://www.yovizag.com/6-movies-releasing-this-sankranti-in-theatres-to-watch-for-a-fun-weekend-with-your-family/', date: 'Jan 2, 2024', category: 'Entertainment' },
  { title: 'Dadi Veerabhadra Rao, a prominent leader from North Andhra, quits YSRCP', url: 'https://www.yovizag.com/dadi-veerabhadra-rao-a-prominent-leader-from-north-andhra-quits-ysrcp/', date: 'Jan 2, 2024', category: 'City News' },
  { title: '10 visa-free countries for Indian passport holders', url: 'https://www.yovizag.com/10-visa-free-countries-for-indian-passport-holders/', date: 'Jan 2, 2024', category: 'Travel' },
  { title: 'Railways announce 2024 Sankranthi special trains to manage extra holiday rush', url: 'https://www.yovizag.com/railways-announce-2024-sankranthi-special-trains-to-manage-extra-holiday-rush/', date: 'Jan 3, 2024', category: 'City News' },
  { title: 'Resignations rattle YSRCP in North Andhra; party announced new in-charges for 27 more constituencies', url: 'https://www.yovizag.com/resignations-rattle-ysrcp-in-north-andhra-party-announced-new-in-charges-for-27-more-constituencies/', date: 'Jan 3, 2024', category: 'City News' },
  { title: 'Breaking the silence: 10 Indian organizations dedicated to supporting sexual abuse survivors', url: 'https://www.yovizag.com/breaking-the-silence-10-indian-organizations-dedicated-to-supporting-sexual-abuse-survivors/', date: 'Jan 3, 2024', category: 'Society' },
  { title: 'Visakhapatnam gang rape case: two accused missing, Chandrababu Naidu expresses his grief', url: 'https://www.yovizag.com/visakhapatnam-gang-rape-case-two-accused-missing-chandrababu-naidu-expresses-his-grief/', date: 'Jan 3, 2024', category: 'Society' },
  { title: 'Advanced science and technology museum at Kailasagiri, Vizag', url: 'https://www.yovizag.com/advanced-science-and-technology-museum-at-kailasagiri-vizag/', date: 'Jan 3, 2024', category: 'Heritage' },
  { title: 'Job fair to be conducted on 5 January 2024 in Visakhapatnam to fill over 600 vacancies', url: 'https://www.yovizag.com/job-fair-to-be-conducted-on-5-january-2024-in-visakhapatnam-to-fill-over-600-vacancies/', date: 'Jan 3, 2024', category: 'City News' },
  { title: '8 thrilling journalism movies about media culture on OTT', url: 'https://www.yovizag.com/8-thrilling-journalism-movies-about-media-culture-on-ott/', date: 'Jan 3, 2024', category: 'Entertainment' },
  { title: 'A perfect morning trio in Vizag to experience on a winter morning', url: 'https://www.yovizag.com/a-perfect-morning-trio-in-vizag-to-experience-on-a-winter-morning/', date: 'Jan 3, 2024', category: 'Travel' },
  { title: 'Dadi Veerabhadra Rao joins TDP, predicts 150 seats for party', url: 'https://www.yovizag.com/dadi-veerabhadra-rao-joins-tdp-predicts-150-seats-for-party/', date: 'Jan 3, 2024', category: 'City News' },
  { title: 'GCC triumphs with 1st prize at ODOP National Awards 2023 for Araku Coffee', url: 'https://www.yovizag.com/girijan-cooperative-corporation-gcc-triumphs-with-1st-prize-at-odop-national-awards-2023-for-araku-coffee/', date: 'Jan 4, 2024', category: 'City News' },
  { title: '24 days of GVMC and Anganwadi workers strike: a looming garbage disaster takes over Visakhapatnam', url: 'https://www.yovizag.com/24-days-of-gvmc-and-anganwadi-workers-strike-a-looming-garbage-disaster-takes-over-visakhapatnam/', date: 'Jan 4, 2024', category: 'City News' },
  { title: 'Top 7 Hindi cinema biopics to watch on OTT for some inspiration and motivation in 2024', url: 'https://www.yovizag.com/top-7-hindi-cinema-biopics-to-watch-on-ott-for-some-inspiration-and-motivation-in-2024/', date: 'Jan 4, 2024', category: 'Entertainment' },
  { title: 'Swarna Bharathi Indoor Stadium in Visakhapatnam set to undergo a major renovation', url: 'https://www.yovizag.com/swarna-bharathi-indoor-stadium-in-visakhapatnam-set-to-undergo-a-major-renovation/', date: 'Jan 4, 2024', category: 'City News' },
  { title: 'Visakhapatnam Union Bank of India fraud: managing partner of a private company jailed for 5 years', url: 'https://www.yovizag.com/visakhapatnam-union-bank-of-india-fraud-managing-partner-of-a-private-company-jailed-for-5-years-for-rs-60-lakh-loss/', date: 'Jan 4, 2024', category: 'City News' },
  { title: 'GITAM Vizag hangout spots: 6 places that make college life memorable to every GITAMite', url: 'https://www.yovizag.com/gitam-vizag-hangout-spots-6-places-that-make-college-life-memorable-to-every-gitamite/', date: 'Jan 5, 2024', category: 'Travel' },
  { title: 'Railways announce cancellation and rescheduling of trains owing to safety works at the Waltair Division', url: 'https://www.yovizag.com/railways-announce-cancellation-and-rescheduling-of-trains-owning-to-safety-works-at-the-waltair-division/', date: 'Jan 5, 2024', category: 'City News' },
  { title: 'Additional Vistadome coaches added to the Visakhapatnam–Kirandul route for enchanting winter journeys to Araku Valley', url: 'https://www.yovizag.com/additional-vistadome-coaches-added-to-the-visakhapatnam-kirandul-route-for-enchanting-winter-journeys-to-araku-valley/', date: 'Jan 5, 2024', category: 'Travel' },
  { title: '20 lakh cash missing from Gajuwaka Mohini Theatre', url: 'https://www.yovizag.com/20-lakh-cash-missing-from-gajuwaka-mohini-theatre/', date: 'Jan 5, 2024', category: 'City News' },
  { title: '7 Sankranti food items that we cannot wait to devour this festive season with our family', url: 'https://www.yovizag.com/7-sankranti-food-items-that-we-cannot-wait-to-devour-this-festive-season-with-our-family/', date: 'Jan 5, 2024', category: 'Food & Culture' },
  { title: 'Kohli and Sharma eye T20 return for World Cup 2024', url: 'https://www.yovizag.com/kohli-and-sharma-eye-t20-return-for-world-cup-2024/', date: 'Jan 5, 2024', category: 'Entertainment' },
  { title: 'Vizag to host India vs England Test match from 2 February 2024', url: 'https://www.yovizag.com/vizag-to-host-india-vs-england-test-match-from-2-february-2024/', date: 'Jan 5, 2024', category: 'Entertainment' },
  { title: 'Evolution of biryani in India: a culinary masterpiece shaped by India\'s history', url: 'https://www.yovizag.com/evolution-of-biryani-in-india-a-culinary-masterpiece-shaped-by-indias-history/', date: 'Jan 5, 2024', category: 'Food & Culture' },
  { title: 'Visakhapatnam police raid Chinnapuram layout and seize 120 kgs of ganja', url: 'https://www.yovizag.com/visakhapatnam-police-raid-chinnapuram-layout-and-seize-120-kgs-of-ganja/', date: 'Jan 5, 2024', category: 'City News' },
  { title: 'Visakhapatnam Port International Cruise Terminal to begin operations in March', url: 'https://www.yovizag.com/visakhapatnam-port-international-cruise-terminal-to-begin-operations-in-march/', date: 'Jan 5, 2024', category: 'City News' },
  { title: 'Visakhapatnam to get glass skywalk bridge at Kailasagiri', url: 'https://www.yovizag.com/visakhapatnam-to-get-glass-skywalk-bridge-at-kailasagiri/', date: 'Jan 6, 2024', category: 'City News' },
  { title: 'Visakhapatnam autorickshaw drivers organise protest rally on 8 January 2024', url: 'https://www.yovizag.com/visakhapatnam-autorickshaw-drivers-organise-protest-rally-on-8-january-2024/', date: 'Jan 6, 2024', category: 'City News' },
  { title: 'Natural Expo to be organised in Visakhapatnam on 7 January 2024', url: 'https://www.yovizag.com/natural-expo-to-be-organised-in-visakhapatnam-on-7-january-2024/', date: 'Jan 6, 2024', category: 'City News' },
  { title: 'Top-rated K-dramas to binge and unwind this weekend', url: 'https://www.yovizag.com/top-rated-k-dramas-to-binge-and-unwind-this-weekend/', date: 'Jan 6, 2024', category: 'Entertainment' },
  { title: '6 amusement parks in India to visit in 2024 for a thrilling getaway with your gang', url: 'https://www.yovizag.com/6-amusement-parks-in-india-to-visit-in-2024-for-a-thrilling-getaway-with-your-gang/', date: 'Jan 6, 2024', category: 'Travel' },
  { title: 'Kurchi Madathapetti song from Gunturu Karam takes the viewers by storm', url: 'https://www.yovizag.com/kurchi-madathapetti-song-from-gunturu-karam-takes-the-viewers-by-storm/', date: 'Jan 8, 2024', category: 'Entertainment' },
  { title: 'Woman death unnoticed for a week at Kurupam Towers, Visakhapatnam', url: 'https://www.yovizag.com/woman-death-unnoticed-for-a-week-at-kurupam-towers-visakhapatnam/', date: 'Jan 8, 2024', category: 'Society' },
  { title: 'Scuba divers recover three tons of waste at Rushikonda Beach in Vizag', url: 'https://www.yovizag.com/scuba-divers-recover-three-tons-of-waste-at-rushikonda-beach-in-vizag/', date: 'Jan 8, 2024', category: 'City News' },
  { title: '7 web series releasing on OTT this week of January for an intriguing weekend binge', url: 'https://www.yovizag.com/7-web-series-releasing-on-ott-this-week-of-january-for-an-intriguing-weekend-binge/', date: 'Jan 8, 2024', category: 'Entertainment' },
  { title: '5 places to visit in RTC Complex, Visakhapatnam to satisfy your taste buds', url: 'https://www.yovizag.com/5-places-to-visit-in-rtc-complex-visakhapatnam-to-satisfy-your-taste-buds/', date: 'Jan 8, 2024', category: 'Food & Culture' },
  { title: 'Team India aiming big in 2024 T20 World Cup', url: 'https://www.yovizag.com/team-india-aiming-big-in-2024-t20-world-cup/', date: 'Jan 8, 2024', category: 'Entertainment' },
  { title: 'Vizag stinks as heaps of garbage continue to pile up in the city for over 27 days', url: 'https://www.yovizag.com/vizag-stinks-as-heaps-of-garbage-continue-to-pile-up-in-the-city-for-over-27-days/', date: 'Jan 9, 2024', category: 'City News' },
  { title: 'A 36-hour guide to Jindhagada Trek in Araku Valley, Visakhapatnam', url: 'https://www.yovizag.com/a-36-hour-guide-to-jindhagada-trek-in-araku-valley-visakhapatnam/', date: 'Jan 9, 2024', category: 'Travel' },
  { title: 'Iconic heritage buildings that stood the test of time in Visakhapatnam', url: 'https://www.yovizag.com/iconic-heritage-buildings-that-stood-the-test-of-time-in-visakhapatnam/', date: 'Jan 9, 2024', category: 'Heritage' },
  { title: 'Rana will skate in pink from Vizag to Chennai supporting breast cancer awareness', url: 'https://www.yovizag.com/rana-will-skate-in-pink-from-vizag-to-chennai-supporting-breast-cancer-awareness/', date: 'Jan 9, 2024', category: 'Society' },
  { title: 'All too well, all too winning: Taylor Swift sweeps awards', url: 'https://www.yovizag.com/all-too-well-all-too-winning-taylor-swift-sweeps-awards/', date: 'Jan 9, 2024', category: 'Entertainment' },
  { title: 'A guided Visakhapatnam heritage walk of architectural gems', url: 'https://www.yovizag.com/a-guided-visakhapatnam-heritage-walk-of-architectural-gems/', date: 'Jan 9, 2024', category: 'Heritage' },
  { title: 'GVMC Commissioner Pravin Kumar IAS', url: 'https://www.yovizag.com/gvmc-commissioner-pravin-kumar-ias/', date: 'Jan 9, 2024', category: 'City News' },
  { title: '9 movies releasing on OTT this week of January for a refreshing movie marathon', url: 'https://www.yovizag.com/9-movies-releasing-on-ott-this-week-of-january-for-a-refreshing-movie-marathon/', date: 'Jan 9, 2024', category: 'Entertainment' },
  { title: 'Revisiting early 90s and 2000s school picnic spots in Visakhapatnam', url: 'https://www.yovizag.com/revisiting-early-90s-and-2000s-school-picnic-spots-in-visakhapatnam/', date: 'Jan 9, 2024', category: 'Heritage' },
  { title: 'The untold story of the Visakha Museum, Visakhapatnam', url: 'https://www.yovizag.com/the-untold-story-of-the-visakha-museum-visakhapatnam/', date: 'Jan 9, 2024', category: 'Heritage' },
  { title: 'Visakhapatnam Kalabharati history', url: 'https://www.yovizag.com/visakhapatnam-kalabharati-history/', date: 'Jan 9, 2024', category: 'Heritage' },
  { title: 'APSRTC to run special buses for Sankranthi from Visakhapatnam starting 9 January', url: 'https://www.yovizag.com/apsrtc-to-run-special-buses-for-sankranthi-from-visakhapatnam-starting-9-january/', date: 'Jan 9, 2024', category: 'City News' },
  { title: 'Down memory lane: 10 hidden gems of old Vizag and its history', url: 'https://www.yovizag.com/down-memory-lane-10-hidden-gems-of-old-vizag-and-its-history/', date: 'Jan 9, 2024', category: 'Heritage' },
  { title: 'APSSDC organised an industry stakeholders workshop in Visakhapatnam collaborating with 94 industries', url: 'https://www.yovizag.com/apssdc-organised-a-industry-stakeholders-workshop-in-visakhapatnam-collaborating-with-94-industries/', date: 'Jan 10, 2024', category: 'City News' },
  { title: 'Job fair on 12 January 2024 in Visakhapatnam to offer employment to over 800 individuals', url: 'https://www.yovizag.com/job-fair-on-12-january-2024-in-visakhapatnam-to-offer-employment-to-over-800-individuals/', date: 'Jan 10, 2024', category: 'City News' },
  { title: '10 things to bring back romance in Visakhapatnam', url: 'https://www.yovizag.com/10-things-bring-back-romance-visakhapatnam/', date: 'Jan 10, 2024', category: 'Travel' },
  { title: 'A travel guide from Vizag to Lakshadweep — India\'s undiscovered gem', url: 'https://www.yovizag.com/a-travel-guide-from-vizag-to-lakshadweep-indias-undiscovered-gem/', date: 'Jan 10, 2024', category: 'Travel' },
  { title: 'Top 10 IMDB rated Indian movies ever', url: 'https://www.yovizag.com/top-10-top-imdb-rated-indian-movies-ever/', date: 'Jan 10, 2024', category: 'Entertainment' },
  { title: '7 reasons why glass skywalk bridge in Visakhapatnam will steal your breath away', url: 'https://www.yovizag.com/7-reasons-why-glass-skywalk-bridge-in-visakhapatnam-will-steal-your-breath-away/', date: 'Jan 10, 2024', category: 'City News' },
  { title: 'GVMC Commissioner advises on prohibition of Bhogi bonfires on roads in Visakhapatnam', url: 'https://www.yovizag.com/gvmc-commissioner-advises-on-prohibition-of-bhogi-bonfires-on-roads-in-visakhapatnam/', date: 'Jan 10, 2024', category: 'City News' },
  { title: 'Temporary stop on Visakhapatnam–Kirandul trains this week', url: 'https://www.yovizag.com/temporary-stop-on-visakhapatnam-kirandul-trains-this-week/', date: 'Jan 10, 2024', category: 'City News' },
  { title: 'Municipal workers call off strike to resume duty from Thursday in Visakhapatnam', url: 'https://www.yovizag.com/municipal-workers-call-off-strike-to-resume-duty-from-thursday-in-visakhapatnam/', date: 'Jan 10, 2024', category: 'City News' },
  { title: 'Everything you need to know about the upcoming floating bridge at Tenneti Park, Visakhapatnam', url: 'https://www.yovizag.com/everything-you-need-to-know-about-the-upcoming-floating-bridge-at-tenneti-park-visakhapatnam/', date: 'Jan 11, 2024', category: 'City News' },
  { title: 'Air, rail and sea: is connectivity from Vizag to major cities in India a problem?', url: 'https://www.yovizag.com/air-rail-and-sea-is-connectivity-from-vizag-to-major-cities-in-india-a-problem/', date: 'Jan 11, 2024', category: 'City News' },
  { title: '6 healthy and affordable food outlets in Vizag you should definitely check out in 2024', url: 'https://www.yovizag.com/6-healthy-and-affordable-food-outlets-in-vizag-you-should-definitely-check-out-in-2024/', date: 'Jan 11, 2024', category: 'Food & Culture' },
  { title: 'Extension of Visakhapatnam to Vijayawada Uday Express trains up to Guntur Station', url: 'https://www.yovizag.com/extension-of-visakhapatnam-to-vijayawada-uday-express-trains-up-to-guntur-station/', date: 'Jan 11, 2024', category: 'City News' },
  { title: 'Swachh Survekshan 2023: Visakhapatnam named fourth cleanest city', url: 'https://www.yovizag.com/swachh-survekshan-2023-visakhapatnam-named-fourth-cleanest-city/', date: 'Jan 11, 2024', category: 'City News' },
  { title: 'YSRCP to field Botcha Jhansi from Vizag Lok Sabha constituency', url: 'https://www.yovizag.com/ysrcp-to-field-botcha-jhansi-from-vizag-lok-sabha-constituency/', date: 'Jan 11, 2024', category: 'City News' },
  { title: 'Visakhapatnam gears up to host Milan 2024 starting 19 February', url: 'https://www.yovizag.com/visakhapatnam-gears-up-to-host-milan-2024-starting-19-february/', date: 'Jan 12, 2024', category: 'City News' },
  { title: 'Deranged man creates havoc at Visakhapatnam Railway Station', url: 'https://www.yovizag.com/deranged-man-creates-havoc-at-visakhapatnam-railway-station/', date: 'Jan 12, 2024', category: 'City News' },
  { title: 'Ready set go: explore Vizag to Bangalore, Ooty, Coorg in 7 days', url: 'https://www.yovizag.com/ready-set-go-explore-vizag-to-bangalore-ooty-coorg-in-7-days/', date: 'Jan 12, 2024', category: 'Travel' },
  { title: '6 women-centric web series and movies to watch on different OTT platforms', url: 'https://www.yovizag.com/6-women-centric-web-series-and-movies-to-watch-on-different-ott-platforms/', date: 'Jan 12, 2024', category: 'Entertainment' },
  { title: 'Will the CM camp office remain in its current location despite plans for Visakhapatnam shift?', url: 'https://www.yovizag.com/will-the-cm-camp-office-remain-in-its-current-location-despite-plans-for-visakhapatnam-shift/', date: 'Jan 13, 2024', category: 'City News' },
  { title: 'Vizag police officials alert citizens to increased burglary risks in the city during Sankranti', url: 'https://www.yovizag.com/vizag-police-officials-alert-citizens-to-increased-burglary-risks-in-the-city-during-sankranti/', date: 'Jan 13, 2024', category: 'City News' },
  { title: 'Pancharama Kshetras: exploring the Sri Kumararama Bhimeswara Swamy Temple in Samarlakota from Visakhapatnam', url: 'https://www.yovizag.com/pancharama-kshetras-exploring-the-sri-kumararama-bhimeswara-swamy-temple-in-samarlakota-from-visakhapatnam/', date: 'Jan 13, 2024', category: 'Heritage' },
  { title: 'Vizag boy Mouli takes over the internet with his latest series 90s Middle Class Biopic', url: 'https://www.yovizag.com/vizag-boy-mouli-takes-over-the-internet-with-his-latest-series-90s-middle-class-biopic/', date: 'Jan 13, 2024', category: 'Society' },
  { title: '6 Malayalam movies to watch on OTT for some laughter, love and drama', url: 'https://www.yovizag.com/6-malayalam-movies-to-watch-on-ott-for-some-laughter-love-and-drama/', date: 'Jan 13, 2024', category: 'Entertainment' },
  { title: 'Celebrate Sankranthi 2024 with nostalgia: 7 Telugu movies for family rewatch', url: 'https://www.yovizag.com/celebrate-sankranthi-2024-with-nostalgia-7-telugu-movies-for-family-rewatch/', date: 'Jan 13, 2024', category: 'Entertainment' },
  { title: 'Visakhapatnam police officials issue strict guidelines against illegal activities during Sankranti 2024', url: 'https://www.yovizag.com/visakhapatnam-police-officials-issue-strict-guidelines-against-illegal-activities-during-sankranti-2024/', date: 'Jan 13, 2024', category: 'City News' },
  { title: 'Grab your passes now: India vs England Test match in Vizag', url: 'https://www.yovizag.com/grab-your-passes-now-india-vs-england-test-match-in-vizag/', date: 'Jan 13, 2024', category: 'Entertainment' },
  { title: 'Visakhapatnam train cancellations & schedule changes between Jan 19–27', url: 'https://www.yovizag.com/visakhapatnam-train-cancellations-schedule-changes-between-jan-19-27/', date: 'Jan 14, 2024', category: 'City News' },
  { title: 'Minor fire mishap in Vizag Steel Plant Blast Furnace 3', url: 'https://www.yovizag.com/minor-fire-mishap-in-vizag-steel-plant-blast-furnace-3/', date: 'Jan 14, 2024', category: 'City News' },
  { title: 'Trainee IAS officers to get a grip on GVMC development solutions in Visakhapatnam', url: 'https://www.yovizag.com/trainee-ias-officers-to-get-a-grip-on-gvmc-development-solutions-in-visakhapatnam/', date: 'Jan 14, 2024', category: 'City News' },
  { title: 'Visakhapatnam city police warns citizens of increased cyber crime and scams in the city', url: 'https://www.yovizag.com/visakhapatnam-city-police-warns-citizens-of-increased-cyber-crime-and-scams-in-the-city/', date: 'Jan 16, 2024', category: 'City News' },
  { title: 'SS Rajamouli journey through movies: the maestro of Tollywood hits', url: 'https://www.yovizag.com/ss-rajamouli-journey-through-movies-the-maestro-of-tollywood-hits/', date: 'Jan 16, 2024', category: 'Entertainment' },
  { title: '7 restaurants and cafes in and around Yendada to visit for a gala time with your gang', url: 'https://www.yovizag.com/7-restaurants-and-cafes-in-and-around-yendada-to-visit-for-a-gala-time-with-your-gang/', date: 'Jan 16, 2024', category: 'Food & Culture' },
  { title: 'Y S Sharmila appointed as Andhra Pradesh Congress President', url: 'https://www.yovizag.com/y-s-sharmila-appointed-as-andhra-pradesh-congress-president/', date: 'Jan 16, 2024', category: 'City News' },
  { title: 'Seven-year-old girl in Visakhapatnam gets injured by a kite string', url: 'https://www.yovizag.com/seven-year-old-girl-in-visakhapatnam-gets-injured-by-a-kite-string/', date: 'Jan 16, 2024', category: 'Society' },
  { title: 'AP Skill Scam: Supreme Court delivers split verdict on Chandrababu Naidu plea to quash FIR', url: 'https://www.yovizag.com/ap-skill-scam-supreme-court-delivers-split-verdict-on-chandrababu-naidu-plea-to-quash-fir/', date: 'Jan 16, 2024', category: 'City News' },
  { title: 'Srikakulam Railway Station awarded with Best Cleanliness Station Award', url: 'https://www.yovizag.com/srikakulam-railway-station-awarded-with-best-cleanliness-station-award/', date: 'Jan 16, 2024', category: 'City News' },
  { title: 'Police arrest people involved in rooster fights and gambling in Visakhapatnam and Anakapalli districts', url: 'https://www.yovizag.com/police-arrest-people-involved-in-rooster-fights-and-gambling-in-visakhapatnam-and-anakapalli-districts/', date: 'Jan 17, 2024', category: 'City News' },
  { title: 'A comprehensive guide to bus travel from Vizag to Hyderabad', url: 'https://www.yovizag.com/a-comprehensive-guide-to-bus-travel-from-vizag-to-hyderabad/', date: 'Jan 17, 2024', category: 'Travel' },
  { title: 'Arasavalli Sun Temple near Vizag, Srikakulam', url: 'https://www.yovizag.com/arasavalli-sun-temple-near-vizag-srikakulam/', date: 'Jan 17, 2024', category: 'Heritage' },
  { title: 'Vizag Zoo: a perfect hangout spot for families', url: 'https://www.yovizag.com/vizag-zoo-a-perfect-hangout-sport-for-families/', date: 'Jan 17, 2024', category: 'Travel' },
  { title: 'Job fair on 19 January in Visakhapatnam to fill over 400 vacancies; 200 additional vacancies open at airport', url: 'https://www.yovizag.com/job-fair-on-19-january-in-visakhapatnam-to-fill-over-400-vacancies-200-additional-vacancies-open-at-airport/', date: 'Jan 17, 2024', category: 'City News' },
  { title: 'Over a dozen corporators will quit YSRCP soon: Sithamraju Sudhakar', url: 'https://www.yovizag.com/over-a-dozen-corporators-will-quit-ysrcp-soon-sithamraju-sudhakar/', date: 'Jan 17, 2024', category: 'City News' },
  { title: 'Vizag to Jeypore: a journey exploring the rich heritage of Odisha', url: 'https://www.yovizag.com/vizag-to-jeypore-a-journey-exploring-the-rich-heritage-of-odisha/', date: 'Jan 17, 2024', category: 'Travel' },
  { title: 'Right movies, wrong time: underrated Telugu gems that would shine today', url: 'https://www.yovizag.com/right-movies-wrong-time-underrated-telugu-gems-that-would-shine-today/', date: 'Jan 17, 2024', category: 'Entertainment' },
  { title: 'Waltair Division receives Best Efficiency Shields at 68th Railway Week Awards', url: 'https://www.yovizag.com/waltair-division-receives-best-efficiency-shields-at-68th-railway-week-awards/', date: 'Jan 17, 2024', category: 'City News' },
  { title: 'Konatala Ramakrishna meets Pawan to join Jana Sena', url: 'https://www.yovizag.com/konatala-ramakrishna-meets-pawan-to-join-jana-sena/', date: 'Jan 17, 2024', category: 'City News' },
  { title: 'Telugu Titans Kabaddi', url: 'https://www.yovizag.com/telugu-titans-kabbadi/', date: 'Jan 18, 2024', category: 'Entertainment' },
  { title: 'Visakhapatnam Collector issues guidelines for Milan 2024 starting from 19 February', url: 'https://www.yovizag.com/visakhapatnam-collector-issues-guidelines-for-milan-2024-starting-from-19-february/', date: 'Jan 18, 2024', category: 'City News' },
  { title: 'Prof PVGD Prasad Reddy reappointed as Andhra University Vice Chancellor', url: 'https://www.yovizag.com/prof-pvgd-prasad-reddy-reappointed-as-andhra-university-vice-chancellor/', date: 'Jan 18, 2024', category: 'City News' },
  { title: 'India clinches thrilling victory with Rohit Sharma\'s century in T20 clash against Afghanistan', url: 'https://www.yovizag.com/india-clinches-thrilling-victory-with-rohit-sharmas-century-in-t20-clash-against-afghanistan/', date: 'Jan 18, 2024', category: 'Entertainment' },
  { title: '7 birdwatching spots in Vizag to visit for an enchanting experience this weekend', url: 'https://www.yovizag.com/7-birdwatching-spots-in-vizag-to-visit-for-an-enchanting-experience-this-weekend/', date: 'Jan 18, 2024', category: 'Travel' },
  { title: 'YSRCP suspends four corporators from Visakhapatnam constituency', url: 'https://www.yovizag.com/ysrcp-suspends-four-corporators-from-visakhapatnam-constituency/', date: 'Jan 18, 2024', category: 'City News' },
  { title: '7 best vegetarian restaurants in Vizag to relish a comforting meal with your family', url: 'https://www.yovizag.com/7-best-vegetarian-restaurants-in-vizag-to-relish-a-comforting-meal-with-your-family/', date: 'Jan 18, 2024', category: 'Food & Culture' },
  { title: '15 most Googled questions about Vizag: how many can you answer?', url: 'https://www.yovizag.com/15-most-googled-questions-about-vizag-how-many-can-you-answer/', date: 'Jan 18, 2024', category: 'Society' },
  { title: 'Binge-worthy delights: 9 upcoming web series to watch out for in 2024', url: 'https://www.yovizag.com/binge-worthy-delights-9-upcoming-web-series-to-watch-out-for-in-2024/', date: 'Jan 18, 2024', category: 'Entertainment' },
  { title: 'All you need to know about Karthik Live concert in Visakhapatnam', url: 'https://www.yovizag.com/all-you-need-to-know-about-karthik-live-concert-in-visakhapatnam/', date: 'Jan 19, 2024', category: 'Entertainment' },
  { title: 'All India Police Commando Competition to unfold in Visakhapatnam', url: 'https://www.yovizag.com/all-india-police-commando-competition-to-unfold-in-visakhapatnam/', date: 'Jan 19, 2024', category: 'City News' },
  { title: 'List of new places to explore in and around Vizag', url: 'https://www.yovizag.com/list-of-new-places-to-explore-in-and-around-vizag/', date: 'Jan 19, 2024', category: 'Travel' },
  { title: 'Salaar: Ceasefire streaming on Netflix from Jan 20', url: 'https://www.yovizag.com/salaar-ceasefire-streaming-on-netflix-from-jan-20/', date: 'Jan 19, 2024', category: 'Entertainment' },
  { title: 'Police crackdown on ganja raids and other illicit activities in Vizag', url: 'https://www.yovizag.com/police-crackdown-on-ganja-raids-and-other-illicit-activities-in-vizag/', date: 'Jan 19, 2024', category: 'City News' },
  { title: '13 rom-coms that give you butterflies to watch this weekend for a wholesome experience', url: 'https://www.yovizag.com/13-rom-coms-that-give-you-butterflies-to-watch-this-weekend-for-a-wholesome-experience/', date: 'Jan 19, 2024', category: 'Entertainment' },
  { title: '7 best non-veg restaurants to visit in Vizag for a hearty meal', url: 'https://www.yovizag.com/7-best-non-veg-restaurants-to-visit-in-vizag-for-a-hearty-meal/', date: 'Jan 19, 2024', category: 'Food & Culture' },
  { title: 'Visakhapatnam train cancellations in Vijayawada Division Jan 29–Feb 25 2024', url: 'https://www.yovizag.com/visakhapatnam-train-cancellations-in-vijayawada-division-jan-29-feb-25-2024/', date: 'Jan 20, 2024', category: 'City News' },
  { title: 'A one-day guide to Simhachalam Trek and camping in Vizag', url: 'https://www.yovizag.com/a-one-day-guide-to-simhachalam-trek-and-camping-in-vizag/', date: 'Jan 20, 2024', category: 'Travel' },
  { title: '6 new releases on OTT platforms this weekend to watch out for in January', url: 'https://www.yovizag.com/6-new-releases-on-ott-platforms-this-weekend-to-watch-out-for-in-january/', date: 'Jan 20, 2024', category: 'Entertainment' },
  { title: 'Jana Sena Party emerging as a force to reckon with in Vizag district', url: 'https://www.yovizag.com/jana-sena-party-emerging-as-a-force-to-reckon-with-in-vizag-district/', date: 'Jan 22, 2024', category: 'City News' },
  { title: 'Special pujas in Vizag temples to mark grand inauguration of Ram Mandir at Ayodhya', url: 'https://www.yovizag.com/special-pujas-in-vizag-temples-to-mark-grand-inauguration-of-ram-mandir-at-ayodhya/', date: 'Jan 22, 2024', category: 'Heritage' },
  { title: 'How to reach Ayodhya from Vizag by train and flight', url: 'https://www.yovizag.com/how-to-reach-ayodhya-from-vizag-by-train-and-flight/', date: 'Jan 22, 2024', category: 'Travel' },
  { title: 'Must-watch documentaries on OTT that can change your perspective', url: 'https://www.yovizag.com/must-watch-documentaries-on-ott-that-can-change-your-perspective/', date: 'Jan 22, 2024', category: 'Entertainment' },
  { title: '6 Ram temples to visit in India before visiting the Ram Mandir in Ayodhya', url: 'https://www.yovizag.com/6-ram-temples-to-visit-in-india-before-visiting-the-ram-mandir-in-ayodhya/', date: 'Jan 22, 2024', category: 'Heritage' },
  { title: 'Scuba divers in Visakhapatnam immerse a Ram idol underwater at Rushikonda', url: 'https://www.yovizag.com/scuba-divers-in-visakhapatnam-immerse-a-ram-idol-underwater-at-rushikonda/', date: 'Jan 22, 2024', category: 'Society' },
  { title: 'An adventurous journey from Vizag to Hyderabad for a weekend trip with your gang', url: 'https://www.yovizag.com/an-adventurous-journey-from-vizag-to-hyderabad-for-a-weekend-trip-with-your-gang/', date: 'Jan 22, 2024', category: 'Travel' },
  { title: 'Sharmila protests in Visakhapatnam against attack on Rahul Yatra', url: 'https://www.yovizag.com/sharmila-protests-in-visakhapatnam-against-attack-on-rahul-yatra/', date: 'Jan 23, 2024', category: 'City News' },
  { title: 'Election committee releases the number of voters in Visakhapatnam district as of 22 January', url: 'https://www.yovizag.com/election-committee-releases-the-number-of-voters-in-visakhapatnam-district-as-of-22-january/', date: 'Jan 23, 2024', category: 'City News' },
  { title: 'Police Commissionerate invites applications for Home Guards service jobs in Visakhapatnam', url: 'https://www.yovizag.com/police-commissionerate-invites-applications-for-home-guards-service-jobs-in-visakhapatnam/', date: 'Jan 23, 2024', category: 'City News' },
  { title: 'This week\'s laughter: 5 stand-up comedy shows in Vizag', url: 'https://www.yovizag.com/this-weeks-laughter-5-standup-comedy-shows-in-vizag/', date: 'Jan 23, 2024', category: 'Entertainment' },
  { title: '7 movies releasing on OTT this week of January', url: 'https://www.yovizag.com/7-movies-releasing-on-ott-this-week-of-january/', date: 'Jan 23, 2024', category: 'Entertainment' },
  { title: 'Weekend drive from Vizag to Srisailam', url: 'https://www.yovizag.com/weekend-drive-from-vizag-to-srisailam/', date: 'Jan 23, 2024', category: 'Travel' },
  { title: '5 delightful cafes in Bangalore we wish we had in Vizag', url: 'https://www.yovizag.com/5-delightful-cafes-in-bangalore-we-wish-we-had-in-vizag/', date: 'Jan 23, 2024', category: 'Food & Culture' },
  { title: 'Vizag to Bangkok direct flights to start operating from 9 April 2024', url: 'https://www.yovizag.com/vizag-to-bangkok-direct-flights-to-start-operating-from-9-april-2024/', date: 'Jan 24, 2024', category: 'City News' },
  { title: 'Visakhapatnam to Jagdalpur travel guide: places to visit', url: 'https://www.yovizag.com/visakhapatnam-to-jagdalpur-travel-guide-places-to-visit/', date: 'Jan 24, 2024', category: 'Travel' },
  { title: 'Explore Chitrakoot Waterfalls from Vizag', url: 'https://www.yovizag.com/explore-chitrakoot-waterfalls-from-vizag/', date: 'Jan 24, 2024', category: 'Travel' },
  { title: '7 web series releasing on OTT in this week of January for a thrilling weekend binge', url: 'https://www.yovizag.com/7-web-series-releasing-on-ott-in-this-week-of-january-for-a-thrilling-weekend-binge/', date: 'Jan 24, 2024', category: 'Entertainment' },
  { title: 'Vizag to Goa: a detailed 4-day itinerary for you to experience Goa to the fullest', url: 'https://www.yovizag.com/vizag-to-goa-a-detailed-4-day-itinerary-for-you-to-experience-goa-to-the-fullest/', date: 'Jan 24, 2024', category: 'Travel' },
  { title: 'Visakhapatnam Best Performance Police Station Awards 2023', url: 'https://www.yovizag.com/visakhapatnam-best-performance-police-station-awards-2023/', date: 'Jan 25, 2024', category: 'City News' },
  { title: '5 mindful wellness practices you should inculcate for an improved lifestyle in 2024', url: 'https://www.yovizag.com/5-mindful-wellness-practices-you-should-inculcate-for-a-improved-lifestyle-in-2024/', date: 'Jan 25, 2024', category: 'Society' },
  { title: '5 must-do things in Vizag if you are visiting the city for the first time', url: 'https://www.yovizag.com/5-must-do-things-in-vizag-if-you-are-visiting-the-city-for-the-first-time/', date: 'Jan 25, 2024', category: 'Travel' },
  { title: '7 patriotic movies to stream on OTT this Republic Day long weekend', url: 'https://www.yovizag.com/7-patriotic-movies-to-stream-on-ott-this-republic-day-long-weekend/', date: 'Jan 25, 2024', category: 'Entertainment' },
  { title: 'Chiranjeevi Padma Vibhushan', url: 'https://www.yovizag.com/chiranjeevi-padma-vibhushan/', date: 'Jan 26, 2024', category: 'Entertainment' },
  { title: 'CM Jagan Mohan Reddy to visit Visakhapatnam on 27 January', url: 'https://www.yovizag.com/cm-jagan-mohan-reddy-to-visit-visakhapatnam-on-27-january/', date: 'Jan 26, 2024', category: 'City News' },
  { title: '6 must-watch underrated movies on OTT to immerse yourself in the world of storytelling', url: 'https://www.yovizag.com/6-must-watch-underrated-movies-on-ott-to-immerse-yourself-in-the-world-of-storytelling/', date: 'Jan 26, 2024', category: 'Entertainment' },
];

const ARTICLES_PER_PAGE = 24;

export default function Writing() {
  const [activeYoVizagCat, setActiveYoVizagCat] = useState('All');
  const [page, setPage] = useState(0);

  const filteredArticles = activeYoVizagCat === 'All'
    ? YO_VIZAG_ARTICLES
    : YO_VIZAG_ARTICLES.filter(a => a.category === activeYoVizagCat);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const pagedArticles = filteredArticles.slice(page * ARTICLES_PER_PAGE, (page + 1) * ARTICLES_PER_PAGE);

  function handleCatChange(cat: string) {
    setActiveYoVizagCat(cat);
    setPage(0);
  }
  return (
    <section id="writing" style={{ padding: '6rem 2rem', borderBottom: '1px solid #302820', background: '#1c1a17' }}>
      <div style={{ marginBottom: '0.75rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', border: '1px solid #e35342', color: '#e35342', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', borderRadius: '100px' }}>
          ✦ Writing
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '4rem', borderBottom: '1px solid #302820', paddingBottom: '1.5rem' }}>
        <div className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#ede7df' }}>
          WRITING
        </div>
        <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4a3e38' }}>
          Newsletter · Published books · Data journalism
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
        {/* Newsletter */}
        <div style={{ padding: '2.5rem', border: '1px solid #302820', borderRadius: '20px', background: '#221f1b' }}>
          <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4ade80', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} className="blink" />
            Active · 275+ subscribers
          </div>
          <div className="font-display" style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#ede7df' }}>THE POLYGON</div>
          <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4a3e38', marginBottom: '1rem' }}>
            LinkedIn Newsletter · 4× monthly · 12+ months · 0 missed editions
          </div>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: '#887d72' }}>
            Exploring the intersection of technology, design, and human behavior. Written for builders, operators, and people who like thinking about why things work the way they do.
          </p>
          <a
            href="https://linkedin.com/in/tanmaysangam"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block', marginTop: '1.5rem', fontSize: '0.62rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: '#e35342',
              borderBottom: '1px solid rgba(227,83,66,0.4)', textDecoration: 'none', paddingBottom: '1px',
            }}
          >
            Read on LinkedIn →
          </a>
        </div>

        {/* Book 1 */}
        <div style={{ padding: '2.5rem', border: '1px solid #302820', borderRadius: '20px', background: '#221f1b' }}>
          <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4a3e38', marginBottom: '1rem' }}>
            Published Book · 2023
          </div>
          <div className="font-display" style={{ fontSize: '1.5rem', lineHeight: 1.15, marginBottom: '0.5rem', color: '#ede7df' }}>
            A GIRL WITH A NOSE RING AND POETRY
          </div>
          <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4a3e38', marginBottom: '1rem' }}>
            Poetry Collection · Writer&apos;s Pocket · Amazon.in
          </div>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: '#887d72' }}>
            A poetry collection about second chances, self-discovery, and the space between dreaming and doing. Self-published and live on Amazon.in.
          </p>
          <a
            href="https://www.amazon.in/s?k=A+Girl+With+A+Nose+Ring+And+Poetry+Tanmay+Sangam"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block', marginTop: '1.5rem', fontSize: '0.62rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: '#e35342',
              borderBottom: '1px solid rgba(227,83,66,0.4)', textDecoration: 'none', paddingBottom: '1px',
            }}
          >
            Find on Amazon →
          </a>
        </div>

        {/* Book 2 */}
        <div style={{ padding: '2.5rem', border: '1px solid #302820', borderRadius: '20px', background: '#221f1b' }}>
          <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4a3e38', marginBottom: '1rem' }}>
            Published Anthology · 2021
          </div>
          <div className="font-display" style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#ede7df' }}>EUPHORIA</div>
          <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4a3e38', marginBottom: '1rem' }}>
            Creative Writing Anthology · The Quill House · Amazon
          </div>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: '#887d72' }}>
            Co-authored creative writing anthology published with The Quill House. Available on Amazon globally.
          </p>
          <a
            href="https://www.amazon.com/s?k=Euphoria+The+Quill+House+anthology"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block', marginTop: '1.5rem', fontSize: '0.62rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: '#e35342',
              borderBottom: '1px solid rgba(227,83,66,0.4)', textDecoration: 'none', paddingBottom: '1px',
            }}
          >
            Find on Amazon →
          </a>
        </div>
      </div>

      {/* Startup Boston bylines */}
      <div style={{ marginTop: '20px', border: '1px solid #302820', borderRadius: '16px', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid #302820', background: '#221f1b' }}>
          <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4a3e38' }}>
            Published Articles · Startup Boston · startupbos.org
          </span>
        </div>
        {[
          { title: 'Your Guide to Navigating the Boston Startup Ecosystem as a Newcomer', url: 'https://www.startupbos.org/post/your-guide-to-navigating-the-boston-startup-ecosystem-as-a-newcomer', date: 'Feb 2025' },
          { title: 'Five Startups Revolutionizing HR Tech in Boston', url: 'https://www.startupbos.org/post/five-startups-revolutionizing-hr-tech-in-boston', date: 'Apr 2025' },
          { title: 'Ideas Between Classes: How Boston Students Turn Campus Creativity into Startups', url: 'https://www.startupbos.org/post/ideas-between-classes-how-boston-students-turn-campus-creativity-into-startups', date: 'Jun 2025' },
          { title: 'How BLAI Is Reimagining Crypto Onboarding with Clarity, Conviction and Community', url: 'https://www.startupbos.org/post/igniting-the-flame-how-blai-is-reimagining-crypto-onboarding-with-clarity-conviction-and-communit', date: 'Jul 2025' },
          { title: '5 Networking Groups for Startup People Ops and HR Professionals in Boston', url: 'https://www.startupbos.org/post/5-networking-groups-for-startup-people-ops-and-hr-professionals-in-boston', date: 'Jan 2025' },
        ].map((article, i, arr) => (
          <div key={article.url} style={{ padding: '1rem 2rem', borderBottom: i < arr.length - 1 ? '1px solid #221f1b' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
            <a href={article.url} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.85rem', fontWeight: 400, color: '#c2b8ae', textDecoration: 'none', borderBottom: '1px solid transparent', lineHeight: 1.4, transition: 'color 0.2s, border-color 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#ede7df'; e.currentTarget.style.borderBottomColor = 'rgba(237,231,223,0.25)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#c2b8ae'; e.currentTarget.style.borderBottomColor = 'transparent'; }}
            >
              {article.title} →
            </a>
            <span style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3a3020', flexShrink: 0 }}>{article.date}</span>
          </div>
        ))}
      </div>

      {/* Yo Vizag articles */}
      <div style={{ marginTop: '20px', border: '1px solid #302820', borderRadius: '16px', overflow: 'hidden' }}>

        {/* Header */}
        <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid #302820', background: '#221f1b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4a3e38' }}>
              Published Articles · Yo Vizag ·
            </span>
            <a href="https://www.yovizag.com" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4a3e38', textDecoration: 'none', borderBottom: '1px solid #3a3020', marginLeft: '4px' }}>
              yovizag.com ↗
            </a>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#e35342' }}>{YO_VIZAG_ARTICLES.length} articles</span>
            <span style={{ fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3a3020' }}>Dec 2023 – Jan 2024</span>
            <span style={{ fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3a3020' }}>Visakhapatnam, AP</span>
          </div>
        </div>

        {/* Context */}
        <div style={{ padding: '1rem 2rem', borderBottom: '1px solid #28221c' }}>
          <p style={{ fontSize: '0.82rem', color: '#4a3e38', lineHeight: 1.6, margin: 0 }}>
            City desk writer for Vizag&apos;s leading local news platform — covering civic issues, heritage trails, travel guides, film, food, and culture for a general readership. Up to 10 pieces per day across six beats.
          </p>
        </div>

        {/* Category filter */}
        <div style={{ padding: '1rem 2rem', borderBottom: '1px solid #302820', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {YO_VIZAG_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => handleCatChange(cat)}
              style={{
                padding: '3px 10px',
                fontSize: '0.57rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                border: `1px solid ${activeYoVizagCat === cat ? (cat === 'All' ? '#e35342' : CATEGORY_COLOR[cat]) : '#302820'}`,
                background: activeYoVizagCat === cat ? `${cat === 'All' ? '#e35342' : CATEGORY_COLOR[cat]}15` : 'transparent',
                color: activeYoVizagCat === cat ? (cat === 'All' ? '#e35342' : CATEGORY_COLOR[cat]) : '#4a3e38',
                cursor: 'pointer',
                transition: 'all 0.15s',
                borderRadius: '100px',
              }}
            >
              {cat === 'All' ? `All (${YO_VIZAG_ARTICLES.length})` : cat}
            </button>
          ))}
        </div>

        {/* Article tiles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1px', background: '#302820', padding: '1px' }}>
          {pagedArticles.map((article) => (
            <a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block', background: '#1c1a17', padding: '1.5rem', transition: 'background 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#221f1b'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#1c1a17'; }}
            >
              {/* Category badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '2px 8px', border: `1px solid ${CATEGORY_COLOR[article.category]}30`, background: `${CATEGORY_COLOR[article.category]}12`, marginBottom: '0.9rem', borderRadius: '100px' }}>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: CATEGORY_COLOR[article.category], display: 'inline-block' }} />
                <span style={{ fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: CATEGORY_COLOR[article.category] }}>
                  {article.category}
                </span>
              </div>
              {/* Title */}
              <div style={{ fontSize: '0.88rem', fontWeight: 500, color: '#c2b8ae', lineHeight: 1.55, marginBottom: '1.2rem' }}>
                {article.title}
              </div>
              {/* Footer row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.56rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3a3020' }}>
                  {article.date}
                </span>
                <span style={{ fontSize: '0.7rem', color: '#e35342' }}>↗</span>
              </div>
            </a>
          ))}
        </div>

        {/* Footer / Pagination */}
        <div style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', background: '#221f1b' }}>
          <span style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3a3020' }}>
            {page * ARTICLES_PER_PAGE + 1}–{Math.min((page + 1) * ARTICLES_PER_PAGE, filteredArticles.length)} of {filteredArticles.length} articles
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              style={{
                padding: '4px 12px', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                border: '1px solid #302820', background: 'transparent', color: page === 0 ? '#2a2520' : '#887d72',
                cursor: page === 0 ? 'default' : 'pointer', borderRadius: '100px', transition: 'all 0.15s',
              }}
            >
              ← Prev
            </button>
            <span style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.1em', color: '#3a3020' }}>
              {page + 1} / {totalPages}
            </span>
            <button
              onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              style={{
                padding: '4px 12px', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                border: '1px solid #302820', background: 'transparent', color: page === totalPages - 1 ? '#2a2520' : '#887d72',
                cursor: page === totalPages - 1 ? 'default' : 'pointer', borderRadius: '100px', transition: 'all 0.15s',
              }}
            >
              Next →
            </button>
          </div>
          <a
            href="https://www.yovizag.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#e35342', textDecoration: 'none', borderBottom: '1px solid rgba(227,83,66,0.4)', paddingBottom: '1px' }}
          >
            View all on Yo Vizag →
          </a>
        </div>
      </div>

      {/* Data journalism callout */}
      <div style={{ marginTop: '20px', padding: '2rem', border: '1px solid #302820', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', background: '#221f1b' }}>
        <div>
          <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#4a3e38', marginBottom: '6px' }}>
            Data Journalism · Pudding.cool Pitch
          </div>
          <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#ede7df' }}>
            The Founder Profile: do LinkedIn career paths predict who starts a company?
          </div>
          <div style={{ fontSize: '0.82rem', color: '#5a4f47', marginTop: '6px', lineHeight: 1.55 }}>
            Python pipeline analyzing 200+ founder profiles from LinkedIn, Crunchbase, AngelList, and ProductHunt. Pitched as a visual data essay to Pudding.cool.
          </div>
        </div>
        <div style={{ flexShrink: 0 }}>
          <span style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 12px', border: '1px solid #6366f1', color: '#6366f1', borderRadius: '100px' }}>
            In Progress
          </span>
        </div>
      </div>
    </section>
  );
}
