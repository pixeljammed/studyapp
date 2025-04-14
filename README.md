> I copy and pasted everything below from an Obsidian document so it looks poorly formatted.

## Contents
[[#**1.1 Project Statement**]]
[[#**1.2 What is the study app?**]]
[[#**1.3 Research into existing solutions**]]
[[#**1.4 Target Audience Evaluation**]]
[[#**1.5 NEA project objective**]]
[[#**1.6 Conceptual designs**]]
[[#**1.7 Solution Outline**]]


## **1.1 Project Statement**

Me and my childhood best friend Lukas often have great trouble focusing with schoolwork, and we tend to get distracted very often. In the past, we have used a real life pomodoro timer for our GCSE studies, and this worked fairly well, but with our transition into sixth form + A Levels, most of my work is now digitalised, so we have found the physical thing less than effective. 

We would like an app for his computer to help him focus on schoolwork. as he often gets side-tracked playing video games or when his friends call him.

*"I'd like an all-in-one **studying / productivity** app which'll allow me to track how and when I am actually productive."* Lukas tells me. *"Right now, my study patterns are spotty and few and far in between and I think a schedule would be a perfect solution. Oftentimes I do my work digitally thanks to the nature of my work (sciences and programming) and I get distracted with other things on my computer, and get tunnel vision on unrelated topics."*

If there were features such as a heads-up display showing you the current task you were dedicating your focus, and the time remaining, I'd be reminded on what I'm currently supposed to be doing.

There are thousands of GCSE, A-Level and University students who would find an app like this incredibly useful, and I think this'd be a great app beneficial to not just me and my friends alike, but to millions of academic students worldwide, and white-collar workers too.

-----
## **1.2 What is the study app?**
**What I want to try and make is a study / productivity app which will primarily help students to focus on their school, college or university work.**
I want to create an application designed for users who want to organise their work sessions efficiently using this Pomodoro technique. The app should split work time into 30-minute blocks, composed of 25 minutes of focused work and 5 minutes of rest, displaying a timer on screen of when to start work, and 
Unlike many of the existing Pomodoro apps available right now, this project aims to offer a wide range of options for end users to configure things like: start and end times, different settings for each day of the week, and personalize the appearance to their needs, more than just a simple dark/light mode.

I've found personally the free ones available currently are simply not extensive enough and lack customisability, while the paid ones are steeply priced for such a simple app.

This app would be built with simplicity and user-centric customisation in mind, addressing the gap in the market where current productivity apps either offer limited features, excessive costs, or confusing user interfaces.

I think an app like this would close the gap for this niche and also might give a sense of community to studying - as you would sync up your breaks with friends using the same app/technique - and you could message them during breaks or chat or so, without the modern "FOMO" (fear of missing out) feeling.
#### 1.2.1 Description of problem
Students today face numerous distractions in their study environments, especially with the rise of digital learning and the accessibility of entertainment options. Many struggle to maintain focus during study sessions, leading to little work getting done and worse academic performance. Traditional time management methods, while effective, often lack digital support that aligns with modern workflows, resulting in decreased motivation and productivity.



#### 1.2.2 Description of solution
My proposed study/productivity app aims to bridge the gap between traditional time management techniques and the digital realm. By integrating features such as, users can easily manage their study sessions while minimising distractions. The app will feature a heads-up display to keep track of ongoing tasks and provide notifications to remind users of their schedules. Additionally, users can configure daily settings, including study blocks and breaks, ensuring that their study habits align with their personal routines.



#### 1.2.3 Influence
When I did my studying for GCSE exams, I found a live stream that offered a pomodoro timer synced up to the real world time - timing breaks at XX:25 and XX:55. I found this was really helpful and helped me keep track of my break time as I could simply look at a clock, or my watch around the house, if I left my desk during the break time. It was really effective, but sadly the livestream later was discontinued by the channel owner. I tried doing the same technique just using my clock, but I would often end up procrastinating the start of it and was once again left unproductive.



#### 1.2.4 Target
The client I'm building for is **Lukas**, a sixth form college student who needs an effective time management solution that works with his workflow. But the app would benefit any user who would want a simple, yet highly customisable studying app without the overwhelming complexity of other confusing time management or organisation software. Features like the ability to start studying at a set time, and to get into a routine, would be great for almost any school, college or university student  



#### 1.2.5 Research of the Problem:
The research phase focused on evaluating existing study / productivity applications, gathering feedback from users through **interviews** and **surveys**, and analysing productivity management books and websites. Many existing apps suffer from a lack of customization options, and their designs are often too generic to fit individual users’ needs. Surveys conducted with a small sample of users, including Lukas, showed their common frustrations:
- Overcomplicated user interfaces.
- Expensive pricing models for basic functionality.
- Not thorough enough
- Not encouraging enough



###### 1.2.5.1 Research Methods:
Product Research:
   - Extensive research into current study / productivity apps on the App Store.
   - Examination of the best features and missing elements of these apps.
   
User Research:
   - Interviewed my client Lukas and other potential users to identify frustrations and needs.
   - Survey for additional data on if, and how users would use such an app.
   
Preliminary Prototyping:
   - Creating a basic app prototype to test usability and functionality.
   - Gathering early feedback on UI/UX design.
   
Reference Materials:
   - Books and websites discussing study techniques such as the Pomodoro (25m work, 5m break) or group focus.



#### 1.2.5 Basic Objectives:
- Create a customisable study/productivity app that syncs with real-world time, breaking work into 25-minute focus sessions and 5-minute breaks - allowing study sessions to be blocked in half-hours.
- Allow users to configure settings per day, including custom start and end times and varying intervals. For instance, the weekend might have less study time or start earlier.
- Design a clean, user-friendly interface that provides powerful functionality without overwhelming the user.
- Ensure data persistence so that user preferences and configurations are saved and accessible across different macOS sessions.
- Incorporate feedback loops such as notifications and progress summaries to help users stay motivated and track their productivity.


## **1.3 Research into existing solutions**
Evaluating the current solutions for their strengths and weaknesses, focusing on things like confusing interfaces, limited customisation options and high pricing, there are problems for each.
- Open source apps tend to be lacking in features (too primitive)
- Closed source, paid apps are too expensive for what they offer.

I believe there is a gap in the market that users want, that I can fulfil.

This section is divided into 2 different sections:
1) 1.3.1 - [[Analysis Final#1.3.1 Commercial Software|Commercial Software]]
2) 1.3.2 - [[Analysis Final#Open Source Software|Open Source Software]]

-----
#### 1.3.1 Commercial Software
The first section is proprietary, commercially sold studying programs. These cost money or have a freemium model, and are sold on app stores / as a paid product.

###### [Session](https://stayinsession.com/)
![[Pasted image 20241017100001.png]]

**Session** is an "absolutely ridiculous" app (as quoted from [zapier.com](https://zapier.com/blog/best-pomodoro-apps/#session)), but is very good in what it does. The app's creator, Phillip Young, says on a blog that he made it because he simply could not find a pomodoro app that fit his specification. He wanted an app with:
1. Looked aesthetically pleasing.
2. Had analytics.
3. Less restrictions (no *timer rule*, for instance).

He set off to create the best possible pomodoro app for Apple devices, and I would say he did that very well. **Session** contains features you would expect from a pomodoro app such as a customisable timer, changeable lengths, keyboard shortcuts and a nice menu bar integration for macOS. However where the app stands out from more simpler alternatives is with its extras, such as syncing between the macOS and iOS app, detailed analytics, integration with both calendar and reminder apps, and website/distraction blocking. 
In addition it also supports the latest apple features, such as live activity in the dynamic island on the latest iPhone models, and integration with Apple Shortcuts and Automations.

Finally, it also has user-care features, such as beginning each "session" as it is called with mindful breathing exercises, and you are prompted to take notes in order to reflect on your productivity. It is a very feature-complete app and is a great choice for mac users.

It is monetized using a freemium system - where an annual subscription for "pro" features costs around £39.99 a year, or £4.99 for a month. However, the developers sees a great deal of revenue coming from this, as evidenced in a blog post he made.

![[CleanShot 2024-10-17 at 09.59.34@2x.png|500]]

His greatest regret, according to himself, is not making it cross platform, as windows dominates the personal computer market while mac only takes up around 14.6%. He claims he could have potentially doubled his revenue if he made it for both windows and mac. In order for me to have the biggest target audience / greatest number of clients I should aim to create the software for both major OS's.

![[Pasted image 20241017120207.png|500]]

**Pros**
- A very extensive Pomodoro timer and has the most fleshed out and expanded features.
- Syncs between mac, iPad, iPhone and Apple Watch.
- Great looking design.
- Has proven profitable for the developer.

**Cons**
- Very expensive (£40 for a year).
- Only for apple devices.

###### [Forest](https://forestapp.cc/)
![[CleanShot 2024-10-17 at 20.06.28@2x.png]]

**Forest** aims to be a solution to smartphones being a distraction while you work. If you still need your phone around you while working for calls or important messages, **Forest** aims to eliminate the distraction.

The basic idea of the app, available for both Apple and Android devices is to provide an interface to your studying, in the form of a tree that grows as you focus. The longer you focus for the more the tree grows, and when you are finished studying, the tree is planted in a personal garden.

The tree and garden aspect aim to "**gamify**" the act of studying and act as a fun, and cute way for users to track their progress and visualise it in an appealing way, potentially encouraging the user to study more. This is a method used by apps like Duolingo, for instance, in the form of their streaks being a proven, effective way to keep users both using the app and creating a healthy habit. You also unlock coins, so you can get new trees or even plant a real one.

There's also a social aspect to Forest, where if you have classmates, colleges, peers or alike using the app as well, you can compare to see who can focus for longer or have a bigger garden. 

Forest is not strictly a pomodoro timer, by that nature, you can focus for as long as you want. However, it is ranked very highly on both the Apple App Store and Google Play Store in the their respective productivity categories. In fact, it's the #1 productivity app in over 136 countries!

My favourite feature of the app, as I've used it personally, is the *Deep Focus Mode* which effectively forces you to keep your phone only on that app, ending your timer if you switch apps. This is how it removes the distraction of your phone, if you are very dedicated to your garden!

The only real problem I see with the app is that you actually have to remember to use it in order for it to be effective. The app does have the ability to set a reminder to use it, but I found this hard as I was undiagnosed with my ADHD at the time. But this is more down to user error than anything.

**Pros**
- Very good app.
- Costs much less compared to [[1 - Existing Solutions#[Session](https //stayinsession.com/)|Session]].
- One-time purchase, which customers usually favour.

**Cons**
- Infrequent updates.
- Charges for "premium" features, even after the initial purchase of the app.
- Completely dominates mobile device market for productivity.




###### [Toggl](https://toggl.com/)
![[CleanShot 2024-10-17 at 20.54.14@2x.png]]

**Toggl** is primarily a time tracking software, more than anything, meant for people who are being paid by the hour in an organization, for instance. This way they can track how long they have worked for, what work they've done, and thereby invoice for the correct amount. My father, for instance, uses this particular product as he finds it invaluable for the things mentioned above.

**Toggl** is very easy to use. If you want to track what you're doing, you can start a timer. The user does not need to specify what project they are working on or who the client is: you can do that after. For instance you can set the timer to count down in your chosen Pomodoro length (25 minutes by default), then take a five-minute break.

However Toggl is more marketed towards teams and corporations, and less of an individual. For most people its features might be a bit too much overkill, unless you are something like a contractor, for instance.

**Pros**
- Integrates with Toggl's other time-tracking and invoicing tools well.
- Pomodoro timer doesn't feel like an afterthought, despite not being a major feature.

**Cons**
- Overkill for the average user.
- Meant for organisations and not solo users.


-----
#### 1.3.2 Open Source Software
This section details open-source solutions for study and productivity, which are freely available for anyone to use and modify. 

Unlike commercial products, these apps are typically maintained by community contributions and are often highly customisable.

###### [Pomotroid](https://splode.github.io/pomotroid/)

![[CleanShot 2024-10-17 at 21.44.47@2x.png]]

**Pomotroid** is a free and open-source Pomodoro timer app that boasts a clean, simple, and user-friendly interface. It’s an excellent option for users who want an easy-to-use timer without the additional complexity that comes with other, more feature-packed software.

The app provides basic Pomodoro functionality, allowing users to set work and break intervals and track their time. It also supports customisable settings, including work/break durations and session limits. Since it's open-source, those with programming skills can modify the app’s code to better fit their needs.

Although **Pomotroid** is a minimalist solution, it lacks some of the features power users would expect from commercial software like **Session** or **Forest**, such as deep analytics, distraction blocking, or syncing between devices.

**Pros**
- Completely free and open-source.
- Simple and clean interface.
- Customisable timer settings.
- Cross-platform (Windows, macOS, Linux).

**Cons**
- Lacks advanced features like analytics and syncing.
- No mobile app or cloud support for syncing across devices.
- Has not been updated in 5 years.

###### [Pomatez](https://zidoro.github.io/pomatez/)

![[CleanShot 2024-10-17 at 22.33.29@2x.png]]

**Pomatez** is another open-source Pomodoro timer that aims to balance simplicity with some useful features, making it a step up from **Pomotroid** in terms of functionality. It includes all the essential features you'd expect, such as adjustable work/break intervals, a to-do list for tasks, and sound notifications when sessions end.

One standout feature of **Pomatez** is its focus mode, which minimizes distractions by hiding the interface while the timer is running. It also offers more control over settings than simpler alternatives, with options for customizing sounds, themes, and even shortcuts for quick access. The app works across multiple platforms and is available for Windows, macOS, and Linux.

As an open-source project, **Pomatez** benefits from community contributions, though like many open-source projects, it doesn't have consistent updates and lacks depth.

**Pros**
- Free and open-source.
- Includes task management tools and focus mode.
- Customisable themes and sound settings.
- Cross-platform compatibility.

**Cons**
- Limited features compared to paid apps.
- Lacks distraction-blocking features.

###### [Weektodo](https://weektodo.me/)

![[CleanShot 2024-10-17 at 22.32.39@2x.png]]

**Weektodo** is an open-source task management tool. It is a to-do list app and **Weektodo** integrates time management features that can be useful for students or professionals looking to organise their weekly tasks with timed study sessions.

Its strength lies in its simplicity and focus on helping users organise tasks by week, which can be great for short-term planning. **Weektodo** is simply a to do task that lets you seperate tasks by day or week and classify them - which could be useful for students who want to schedule when to do assignments for instance, or seperate them by subject.

**Weektodo** also has very good integration with other apps like Apple Reminders and

**Pros**
- Free and open-source.
- Good integration with other apps.
- Available on multiple platforms.

**Cons**
- Lacks more advanced features such as analytics or device syncing.

-----
#### 1.3.3 Evaluation of current market
Right now there are a lot of study apps or productivity apps for all devices, but there's a gap in the market.
Complex and premium apps come at a steep price,


## **1.4 Target Audience Evaluation**
After speaking to a wide variety of people, both my age and older and younger, as well as reading reviews from the existing solutions mentioned before

#### 1.4.1.1 Survey
I asked 4 students about what they thought of such an app - the responses were generally positive.


> [!NOTE]+ What level of Education are you currently studying at?
> FREDDIE: GCSE
> DAX: GCSE
> JAMES: GCSE
> ROWAN: GCSE

> [!NOTE]+ How do you typically organise your study schedule?
> FREDDIE: I don't at all, although I want to and need to
> ROWAN: It's completely unorganized
> DAX: I don't really do anything at all
> JAMES: Right now I do not, at all.

> [!NOTE]+ Do you prefer to work digitally, on paper, or a combination of both?
> FREDDIE: A combination of both. I do notes on paper, and then I factor them into Anki flashcards
> ROWAN: Digitally, I prefer but only sometimes I'm allowed to
> DAX: A combination
> JAMES: I prefer on paper - even if questions are on a screen I prefer to write it out

> [!NOTE]+ How often do you find yourself getting distracted while studying?
> FREDDIE: All the time, quite often. If I get into a focus mode then I can do it quick but often I struggle if I call one my friends, unless it's maths.
> ROWAN: Very, very often, I can't concentrate at all
> DAX: If I'm in the mood I can focus for an hour straight
> JAMES: I think I struggle, but only because I have distractions around me. If I go in a quiet place it works well but I have too many distractions in my room, but other places don't have my revision resources.

> [!NOTE]+ Would you find it useful if the app could block distractions like social media or notifications while studying?
> FREDDIE: I already use an app like that called Flora, and it's very useful. I think quite a lot of people use it. You start a focus session and it blocks every app on your phone.
> ROWAN: Yeah - as soon as I get a notification I get sucked into a rabbit hole
> DAX: Same as James, pretty much
> JAMES: I get distracted very often but also I need my music to study, and also select contacts if possible so my parents could call me.

> [!NOTE]+ Do you currently use any methods or apps to manage your study time? If so which ones
> FREDDIE: Flora, which I described above, where you can start a focus session during your work. I think it's free and it's very popular.
> ROWAN: Nope, I don't use any...
> DAX: I also use Flora!
> JAMES: I use Toggl, which lets me timekeep what I do.

> [!NOTE]+ Would you be interested in a timer feature to help you break study sessions into manageable chunks?
> FREDDIE:
> ROWAN: Yes, because I really need breaks because of my ADHD but it's hard to manage them
> DAX:
> JAMES: Yes, and it would be useful if it could tell me what I've studied a lot of so I could balance out my workload

> [!NOTE]+ Would you prefer an automatic schedule generator or a customisable timetable based on your preferences?
> FREDDIE: It would a good feature if you could import your exam timetable so it said you need to do X amount of study, and prioritise certain subjects when an exam is upcoming for it.
> ROWAN: Yes, because it's really hard for me to organise my time, and if I knew exactly what I needed to do at a certain time, it'd be more motivating to start on them.
> DAX:
> JAMES: Yes, very, I think a good feature would be take a picture of your school timetable, maybe using AI.

> [!NOTE]+ Is there anything specific you struggle with when it comes to managing your study time or productivity? For example revision methods.
> FREDDIE: I struggle with going over stuff that I already know because I find it really easy, maybe if there was a feature that could tell me what to study, that would be great.
> ROWAN: I don't have issues with anything that hasn't been convered yet.
> DAX: If it had generated revision methods, and showed you what topics you need to cover.
> JAMES: A space repetition algorithm maybe? 

> [!NOTE]+ How important is it for you to track how much time you spend on each subject or task?
> FREDDIE: Pretty important, I often find myself focussing on certain subjects I enjoy and am good at when actually I need to focus on others.
> ROWAN: What Freddie said is relatable. I think a feature suggesting me what I should study would be good!
> DAX: I think it would be very useful if the app showed you how much time you have spent revising/studying different subjects (and possibly their topics within specific units of the subjects)
> JAMES: Same as what Dax said. You should have timers per subjects, and it'd be useful to see what time you spend for what

> [!NOTE]+ What kind of reminders or notifications would help you stay on track with your study sessions?
> FREDDIE: I think that notifications similar to those used by duolingo where they "guilt trip" you could be useful. Also if the exam calendar is synced they could use this to tell you how many days until your exam, which would definitely get me to revise.
> ROWAN: Maybe a notification that reminded me to start studying?
> DAX: It would be cool if there was a streak feature like in Duolingo as it could help keep students more dedicated to studying daily and maybe some notifications that appeared if you haven't revised on a specific day.
> JAMES: Yeah, I think what Freddie and Dax said is

> [!NOTE]+ How would you like a study app to help you balance multiple subjects or projects?
> FREDDIE: That would be useful so I can fairly allocate my time between subjects.
> ROWAN: I'm not really sure to be honest
> DAX: It would be useful if you could create a folder potentially to save different projects to and different subsections of different parts of the project to help keep track. 
> JAMES: I think I could do that myself but also a simple to-do list feature would suffice maybe!

#### 1.4.1.2 Findings of Survey

From the survey I gathered that most students struggle with organizing their study schedules, with little to no formal planning in place. They express a need for more structure, especially in terms of setting goals and breaking up study sessions. They'd like such an app to exist - with abilities such as generating personalized study schedules, with features that can prioritize subjects based on upcoming exams or study needs. Customization are both desirable - students want a balance between ease of use and personal input.

The students showed great enthusiasm while being interviewed as a group, suggesting features unprompted and saying how they'd find such an app really useful.

Distractions are another major challenge, and many of the students said they would benefit from features like blocking notifications or apps while studying. The ability to manage distractions, while still allowing for necessary access (things like music or calls), is important. Some students already use focus apps, like Flora, so there is definite evidence that these sorts of applications are successful + students are interested in them.

Students also show interest in tracking the time they spend on each subject, with some preferring to track time down to individual topics within a subject. This could help them balance their workload better. Other desired features include study reminders, streaks for motivation, and tools like spaced repetition to improve productivity and memory retention.

#### 1.4.2.1 Interview w/ Client
I interviewed my client Lukas to gather information on he'd specifically like in the app.

The questions are in **bold text**.


**What do you currently find challenging about managing your study sessions?**

I just can’t stay focused when I study on my laptop. I get distracted by games or notifications, and time goes by without me getting anything done. I think I really need a way to stay on task, so I can actually see what I'm supposed to be doing and how much time I have left.

**What specific features would you find most helpful in a study app?**

I think a timer is essential, but it would need to be visible on-screen so I don't lose track. I'd also like the option to set reminders for my tasks and see my study schedule at a glance. A customizable schedule for each day would be great too, because some days are busier than others. And if I could track my time for each subject, I think I’d be able to see where I need to focus more.

**How do you feel about using the Pomodoro technique? Have you used it before?**

Yeah, I used a real-life Pomodoro timer for GCSEs, and it worked pretty well. But now, since all my work is digital, I don't find a physical timer as useful. A digital Pomodoro timer with notifications to remind me to take breaks would probably be perfect.

**Do you think having a heads-up display showing your current task and time remaining would help you stay focused?**

Definitely! I think seeing what I’m working on and how much time is left would keep me on track. I often get sidetracked because I forget what I should be doing, so having that reminder in front of me would be really helpful.

**How important is customizability to you in a study app?**

Very important! I want to be able to adjust my start and end times, change my study duration for each day, and set my own schedule. Other study apps I've tried are too rigid, and I can’t make them fit around my own schedule.

**Would a community feature, like syncing breaks with friends, be something you’d use?**

Yeah, that could be fun. It would definitely make studying feel less isolating, especially if I can message friends during breaks or see when they're studying too. It might keep me motivated, so I’d probably use that feature. Whenever I studied I would have a nagging feeling that maybe my friends were messaging me on social media for instance, so I'd be cool to know they're busy too - and I'm not missing out on anything.

**Have you tried other study apps, and if so, what did you find lacking in them?**

I've tried a few, but they’re usually either too basic or way too complicated with features I don’t need. Most of them don’t let me customize the timer as much as I’d like, and they don't have options for scheduling different times for each day.

#### 1.4.2.2 Findings of Interview
The interview with my client, Lukas, provided valuable intel on the specific needs students who'd use a study app. From the information I gathered it was clear one of the main challenges he faces is staying focused while working digitally, as frequent distractions from games and notifications disrupt his workflow. He expressed a clear need for an app that would display his current task and the time remaining, which he believes would help him stay on track.

 My client showed enthusiasm for the Pomodoro technique, having previously found it effective during his GCSE studies. However, he finds physical timers less useful now that his work is entirely digital, illustrating just how wanted a digital tracker is these days. He mentions the importance of a customizable schedule, as his workload and availability vary throughout the week, and he would like the flexibility to adjust start times, study durations, and daily settings.

A community feature also appealed to him, as it would make studying feel less isolating and provide an opportunity to sync breaks with friends. This feature could also enhance motivation by allowing him to connect with peers during breaks and share progress or solutions on answers for example. Finally, the client noted that other study apps he’s tried have often been too rigid or overly complicated, with few customization options and unnecessary features.
## **1.5 NEA project objective**
#### 1.5.1 Primary objectives
Created with [ASCII flow](https://www.asciiflow.com).

```
Primary Objectives
└── Login System (BEFORE ACCESSING APP - USER MUST BE LOGGED IN)
	│
    ├── Account Registration
    │   ├── Create username
    │   ├── Create password 
    │   ├── Email
    │   └── Verify account creation through SMS / phone
    │
    ├── Account Login
    │   ├── Enter username
    │   ├── Enter password
    │   └── Forgot password
    │       └── Reset password via email
	│
	├── Frontend Objectives
	│   │
	│   ├── 1. App Navigation
	│   │   ├── 1.1 Display primary screen with:
	│   │   │   ├── Current date and time
	│   │   │   ├── Goals/Subjects category
	│   │   │   ├── Total time studied today (changes dynamically)
	│   │   │   └── Study time tracking per subject
	│   │   └── 1.2 User can create a custom subject list with:
	│   │       ├── Subject name
	│   │       ├── Icon
	│   │       └── Customizable color
	│   │
	│   ├── 2. Community Study
	│   │   ├── 2.1 Real-time display of other users studying
	│   │   ├── 2.2 Show user statuses as one of possible states:
	│   │   │   ├── Studying
	│   │   │   ├── Taking a break
	│   │   │   └── Asleep
	│   │   └── 2.3 Live status updates of study partners.
	│   │
	│   ├── 3. Timer
	│   │   ├── 3.1 Core Pomodoro timer
	│   │   ├── 3.2 Auto-pause timer if user leaves app
	│   │   ├── 3.3 “Allowed Apps” feature for multitasking
	│   │   └── 3.4 Concentration timer (track uninterrupted study time)
	│   │
	│   ├── 4. User grouping
	│   │   ├── 4.1 Separate users by country and time zone
	│   │   ├── 4.2 Group users by 
	│   │   └── 4.3 Display ranks (daily, weekly, monthly)
	│   │
	│   ├── 5. Motivation
	│   │   ├── 5.1 Award in-app currency
	│   │   └── 5.2 In-app shop for purchasing cosmetic items
	│   │
	│   └── 6. Interface
	│       ├── 6.1 Minimalistic, distraction-free design 
	│       ├── 6.2 Easy navigation
	│       │   ├── Sidebar
	│       │   ├── Tabs bar (bottom)
	│       │   └── Main home page / dashboard
	│       └── 6.3 Limit features to avoid clutter
	│
	└── Backend Objectives
	    │
	    ├── 1. Login system
	    │   ├── 1.1 User login via Firebase Auth
	    │   ├── 1.2 Authentication w/ phone number
	    │   └── 1.3 User profile management
	    │
	    ├── 2. Real-Time Database Integration
	    │   ├── 2.1 Store user statuses and activity logs (Firestore for real-time updates).
	    │   └── **2.2 Sync subject lists and study time** (Firestore documents for each user).
	    │
	    ├── 3. Analytics
	    │   ├── 3.1 Collect study habit insights (aggregate data using Firestore queries).
	    │   └── 3.2 Comparative analytics with user’s group (use Firestore to group data by study levels).
	    │
	    ├── 4. In-App Currency and Shop Management
	    │   ├── 4.1 Implement currency tracking
	    │   └── 4.2 Shop transactions for cosmetic items
	    │
	    ├── 5. Notifications and Real-Time Updates
	    │   ├── 5.1 Push notifications for study status updates
	    │   └── 5.2 Live updates for community features
	    │
	    └── 6. Offline Functionality
	        ├── 6.1 Basic timer functionality offline (local storage for timer state)
	        └── 6.2 Sync data when reconnected

```
#### 1.5.2 Secondary (additional objectives)
- [ ] 2FA (2 factor authentication) through email or phone.

## **1.6 Conceptual designs**
So far, I had created a few interface designs / mock-ups, and code prototypes in XCode.

![[CleanShot 2024-09-23 at 23.36.23@2x.png]]
*A prototype of a simple, potential mockup of the User interface made in Figma.*

This was my first time using a UI design tool like Figma before. I used the official apple preset pack to get SwiftUI looking elements which would look like a typical mac app.

![[CleanShot 2024-09-18 at 01.35.27@2x.png]]
*A basic timer I made in XCode to learn the basics of Swift and see if it would be suitable to code my study app in. *

I had made one initial prototype - which is just focusing on creating a basic timer with real-world synchronisation in a window for now. I wrote this in the programming language *Swift* made by Apple Inc.
Customisation options is something I'm looking to mainly expand on, such as notifications / reminders and a settings menu, which I will probably use in my final app.

![[CleanShot 2024-09-18 at 01.36.39@2x.png]]
*My GitHub repository for the project, where the code and assets for the project are publicly viewable and open source\*.*

I had set up my development environment on XCode on my MacBook, so that the project can use version control via GitHub. I've installed required dependencies and packages, configuring the repository with a description and a proper legal licensing agreement. The repository is [available here](https://github.com/pixeljammed/pomodoro). Note the legal license, a copy of which can be found at the bottom of the analysis.

However right now I decided to make the move to the *React Native* app development framework, which supports both desktop and mobile. This was because of the survey responses I figured there would be a much bigger market for a mobile study app.
So far I have made 


#### 1.6.2 Prototype Code


#### 1.6.3 Diagrams


#### 1.6.4 Housekeeping
*This section is how I plan to, and have planned to so far organize my project internally, both for the documentation and actual programming of it.*

###### 1.6.4.1 Report writing
I plan to write the final project report using **Microsoft Word** and **Obsidian** which is the program this document is written in, with regular updates to ensure all aspects of the project are thoroughly documented, including analysis, research, and testing. Diagrams and app mock-ups will be created using **Figma** or in procreate 


###### 1.6.4.2 Version control
Version control is managed through **Git** with all changes committed to **GitHub**.  GitHub will also act as the primary backup to avoid data loss. (GitHub link can be found [here](https://github.com/pixeljammed/pomodoro/tree/main)).

###### 1.6.4.3 Referencing
References are being tracked using **Zotero** and occasionally **MS Word's Referencing Manager**. All sources, whether from websites, books, or interviews, are saved with full citation details to ensure accurate referencing in the report.


###### 1.6.4.4 Development Environment:
I have fully set up my dev environment on **XCode**  on my MacBook, and **Visual Studio Code** on my home computer. I've installed required dependencies and packages and configured Git for versioning control. I am also using my iPhone to test how the app functions on a real phone, 

###### 1.6.4.5 Storage and Code Management
The project is stored in my school OneDrive, ensuring that I can access it from school or home.
Code is hosted on GitHub in a private repository for version control, backup, and future collaboration. 
Locally, the project files are saved on my MacBook for offline development and testing.



-----
## **1.7 Solution Outline**
Using the *React Native* framework, in the *JavaScript* language as a frontend/user interface, and *Firebase* as the backend / internal server service, I will create a application for phones that will:

When started, the application should display a screen with a timer, a goals/subjects category, and studying time for each subject. The user can create a desired list of subjects that they are studying and label the subject with an name, icon, and customizable colour.

The core focus of this application is **togetherness** - something I have found is missing from other similar productivity apps. The highlight of this application is that the user can see others who are studying along with them. When the user clicks the timer, the application then switches to a screen full of small figures who are studying in real time. The users are represented by icons, showing their status - either:
1. **Studying**
2. **Taking a break**
3. **Asleep.** 

The core timing of the studying works by Pomodoro - which is a study method that is split into 25 minutes of study followed by 5 minutes of work, repeated for as long as the user likes. The difference with this application however 

In addition, the user cannot leave the application because if he or she happens to do so, the timer stops. However, if the user uses the function of “Allowed Apps,” they can use other applications, such as phone, Gmail, and Microsoft Teams or such, while also recording his or her study time. Although there is an overall timer that keeps track, there is also an “Allowed apps” timer. So, once one is finished with certain applications outside of the app, he or she would want to return to the application. Furthermore, there is a concentration timer, which is a timer that records without any breaks.

The application is separated by both Country and study level - based on the level of education you are in, from Secondary, Sixth form, University in the UK for example. This is so users can get a good idea of an ideal studying schedule through others, seeing when others start studying, end studying, and go to sleep. The app should show daily, weekly, monthly, and grade level ranks for the same time zone. For example, in the United Kingdom, the user is competing with those who are also residing in the same time zone of GMT, like Ireland and Iceland, showing users studying at the same time as the user.

The application also aims to "gamify" the act of studying - typically associated with boredom. A currency can be gained through studying. Each successful completed half an hour's worth of studying leads to the user gaining 100cr, and this currency can be spent on cosmetic items for the user in a shop.


As I am creating an app to decrease distractions and increase productivity, I am going to try and ensure the number of features is not overwhelming, and those that are present in the app are simple and intuitive, and easy to navigate. I will try keep design simple while aesthetically pleasing, minimal to fit in with the distraction-less direction of the app. I also think only purely necessary features should be applied, due to the time constraints, I do not want to get ahead of myself.

This outline should ensure that I achieve my primary program objectives, and additionally satisfy my client and other users needs within the time limits of the project.


-----
 **Copyright (C) Milo Tek - All Rights Reserved**
- Unauthorised copying of this project or any related material (such as code, or resources), via any medium is strictly prohibited.
- You may view this project and code for educational purposes, but CANNOT do anything else, such as copy, fork, steal or re-use under any circumstances without proper permission from the author.
- Proprietary software, protected under international copyright law.
- Written by Milo Tek [milotek07@gmail.com](mailto:milotek07@gmail.com), 18th September 2024.
