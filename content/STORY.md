## INTRO – Northbridge Bank, Today

**Panel 1**
*Visual:* Big glass building. Inside, multiple screens show “Kafka Cluster A”, “Cluster B”, “Cloud Kafka”, “On Prem”.
**Narration:**
Northbridge Bank had data in motion everywhere. Cards, payments, fraud checks, customer events. Kafka was the heartbeat of the place.

**Panel 2**
*Visual:* Open space. Emma (Platform Lead) at her desk, laptop full of tabs.
**Emma (thinking):**
“We invested a lot in streaming. So why does it still feel so slow to get anything done?”

**Panel 3**
*Visual:* Daniel (Senior App Engineer) squinting at a Terminal and two dashboards.
**Daniel:**
“I can build a new service in a day. Then I lose a week just figuring out what Kafka is actually doing.”

**Narration:**
They had the data.
They did not yet have the journey.

Scroll.

---

## STEP 1 – UNLOCK STREAMING VELOCITY

“Seeing what streams do, so teams can move with confidence.”

### Challenge 1 – “Five tools open and still no answer”

**Panel 1**
*Visual:* Daniel with three monitors. On each: Grafana, a homegrown dashboard, a Kafka CLI window, Slack.
**Narration:**
Monday morning. A customer-facing app started lagging. No one knew why.

**Daniel:**
“Consumer looks fine here. Lag looks fine there. Connect says it is healthy. None of this matches what the product team sees.”

**Panel 2**
*Visual:* Slack on screen: “@kafka-team any idea what’s wrong?”
**Daniel:**
“I have five tools open and still no answer. This cannot be the normal way to work.”

**Panel 3**
*Visual:* Emma pulls her chair next to Daniel.
**Emma:**
“Show me everything you check when something like this happens.”

**Daniel:**
“Ok, brace yourself.”

**Narration:**
Every incident felt like a tour of every internal tool they ever built.

---

### Challenge 2 – “New engineer, same maze”

**Panel 1**
*Visual:* New engineer, Priya, joins a stand-up.
**Priya:**
“I need to add a new stream for ATM events. Where do I see how the existing streams behave?”

**Panel 2**
*Visual:* Daniel sharing his screen.
**Daniel:**
“So… we have this Grafana board, this internal tool, a custom script for topic inspection, and a separate UI for schema. You kind of learn by pain.”

**Panel 3**
*Visual:* Priya looks at the different tools, overwhelmed.
**Priya:**
“So there is no single place where I can see ‘here is the topic, here are consumers, here is the schema, here is what is going on’?”

**Daniel:**
“Not yet.”

**Narration:**
Onboarding did not fail. It just took too long.

---

### Challenge 3 – “Only three people really know”

**Panel 1**
*Visual:* Teams on Slack. Product wants to know why a feature rollout was delayed.
**Slack message from Product:**
“Release moved again because of Kafka. What is going on?”

**Panel 2**
*Visual:* Emma gets tagged with two other “Kafka gurus”.
**Narration:**
Every question about Kafka ended in the same place.

**Emma (thinking):**
“We cannot be the helpdesk for every stream in this bank.”

**Panel 3**
*Visual:* Emma talking to Daniel in the hallway.
**Emma:**
“Right now, only three people can confidently answer what Kafka is doing. That is the real risk.”

**Daniel:**
“And any time we help, we are not building. We are just trying to guess what the system is doing.”

---

### What Emma starts to see

**Panel 1**
*Visual:* Emma at a whiteboard drawing many arrows between tools.
**Emma:**
“We do not miss data. We miss a single picture. A way for any engineer to say: this is what my streams are doing right now.”

**Narration:**
The problem was not capacity.
The problem was that no one could see the system clearly.

---

### Capabilities that change the picture

**Narration (scroll section):**

Emma writes a small list in her notebook:

* One place to see topics, consumers, connectors, schemas, security
* A predictable view of local, dev, staging, prod
* Tools that make debugging less of a black art
* Alerts that point to what matters

She labels the page: **Step 1 – Streaming Velocity** 

---

### Outcomes (in-world)

**Panel 1**
*Visual:* Conduktor Console on screen. Topics, consumers, lag, schemas, connectors, security, all listed.
**Daniel:**
“I can finally see my stream end to end. Topic, consumer, connector, schema changes, all in one place. This feels like cheating.”

**Panel 2**
*Visual:* Priya looking at the same screen.
**Priya:**
“So I do not need to learn five tools to debug my first app?”

**Emma:**
“You can learn Kafka. Yet you do not have to reverse-engineer our system. That is a big difference.”

**Narration:**
Velocity did not come from more engineers.
It came from helping everyone see what streams were actually doing.

---

### AE Discovery Prompts – Step 1

These lines never appear in the comic. They are for the reader.

* How do teams at your account understand what their streams are doing today?
* How many tools do they open when something goes wrong?
* How long does it take for a new engineer to ship their first Kafka based feature?
* Who ends up tagged on Slack every time Kafka is “acting weird”?

---

## STEP 2 – CREATE CENTRAL CLARITY

“Agreement before more speed.”

### Challenge 1 – “Three customer topics, three different stories”

**Panel 1**
*Visual:* Cross-team review meeting. Screens show three topics: `customer_events`, `customer-update`, `cust_evt`.
**Team A Lead:**
“We send customer profile updates here.”
**Team B Lead:**
“We send profile changes here, too, for our product.”
**Team C Lead:**
“We send KYC updates into this one.”

**Panel 2**
*Visual:* Data Analyst on the call, confused.
**Data Analyst:**
“If I want ‘the customer profile’, which topic is the source of truth?”

**Panel 3**
*Visual:* Emma glances at Daniel.
**Emma (thinking):**
“We are not short on events. We are short on shared meaning.”

---

### Challenge 2 – “Who owns this thing?”

**Panel 1**
*Visual:* Incident report. A field meaning changed in a topic, breaking a downstream process.
**Security Lead:**
“Who owns this topic?”

**Panel 2**
*Visual:* Silence in the room. People look at each other.
**Team Lead:**
“We created it two years ago. The people who built it moved teams.”

**Panel 3**
*Visual:* Emma flips through a wiki with outdated notes.
**Emma:**
“This is no longer a tech problem. This is an ownership problem.”

---

### Challenge 3 – “One bank, many rules”

**Panel 1**
*Visual:* Whiteboard with four clusters: On-prem, Cloud, Europe, US. Each side has its own naming conventions and access rules scribbled.
**Emma:**
“Here we call it `cust_events`. There it is `customer-topic`. Over here we use service names. This is how things rot slowly.”

**Panel 2**
*Visual:* Daniel looking at a request from a new team.
**Daniel:**
“Every new project needs a story about ‘how this cluster works’. That slows everyone down.”

**Panel 3**
*Visual:* Emma in a small huddle with Platform and Security.
**Emma:**
“If we do not create central clarity now, decentralization later will just expand chaos.”

---

### What Emma starts to see

**Panel 1**
*Visual:* Emma draws boxes on a whiteboard: “Retail”, “Cards”, “Lending”, “Risk”.
**Emma:**
“We need data domains that match the bank. Each domain needs clear ownership. Streams should live inside these domains, not float in the void.”

**Panel 2**
*Visual:* She adds a “Catalog” box.
**Emma:**
“And we need a catalog where any engineer or analyst can see: what is this stream, who owns it, what does it represent, who can use it.”

**Narration:**
The problem was not that teams moved fast.
The problem was that no one had a shared map.

---

### Capabilities that create central clarity

**Narration (scroll):**

Emma writes a second list:

* One control plane that spans clusters
* Data domains that mirror the business
* Ownership attached to each topic, connector, schema
* Shared naming and structure rules
* Central audits and patterns

She labels this page: **Step 2 – Central Clarity**.

---

### Outcomes (in-world)

**Panel 1**
*Visual:* Conduktor view with domains and ownership badges.
**Data Analyst:**
“I can finally search for ‘Customer Profile’ and see the product streams that are actually certified.”

**Panel 2**
*Visual:* Emma in a call.
**Emma:**
“Every stream lives inside a domain that owns it. You know who to talk to. You know what it means.”

**Panel 3**
*Visual:* Daniel planning a new feature.
**Daniel (thinking):**
“I can see existing streams before creating a new one. So I reuse instead of duplicating by default.”

**Narration:**
Clarity did not slow anyone down.
It removed friction that had been present for years.

---

### AE Discovery Prompts – Step 2

* When a topic misbehaves at your prospect, can they immediately see who owns it?
* Do they have repeated topics with similar names and unclear meanings?
* Do different clusters follow different naming or access rules?
* How much time do platform or data teams spend clarifying basic questions about streams and ownership?

---

## STEP 3 – ENABLE SAFE DECENTRALIZATION

“Freedom inside guardrails.”

### Challenge 1 – “The ticket avalanche”

**Panel 1**
*Visual:* Emma’s JIRA board: dozens of tickets labeled “Create topic”, “Update ACL”, “Add connector”, “Change retention”.
**Daniel:**
“This is not a board. This is a wall of cries for help.”

**Panel 2**
*Visual:* Emma scrolling through similar tickets.
**Emma:**
“They all want similar things: new topics, access, small changes. None of this should require custom work every time.”

**Panel 3**
*Visual:* Slack ping from a team lead.
**Team Lead:**
“Hey, any ETA on our topic request? It is blocking our release.”

**Emma (thinking):**
“We cannot be the bottleneck forever.”

---

### Challenge 2 – “Shadow moves”

**Panel 1**
*Visual:* Production incident review, muted call. A team rolled out a change directly on Kafka.
**Engineer from another team:**
“We just changed the schema on the fly. It worked in dev.”

**Panel 2**
*Visual:* Downstream service chart nose-diving.
**Narration:**
The system reacted exactly as configured.
The organization did not.

**Daniel:**
“If every team invents its own way to do changes, we will never catch up.”

**Panel 3**
*Visual:* Security Lead raising an eyebrow.
**Security Lead:**
“We do not want to slow you down. Yet we need predictability. We need to know how changes happen.”

---

### Challenge 3 – “Developers want control, platform wants sleep”

**Panel 1**
*Visual:* Emma and Daniel in a one-on-one.
**Daniel:**
“Developers do not want freedom for fun. They just want to stop waiting.”

**Emma:**
“And platform does not want control for ego. We just know what happens when there are no rules.”

**Panel 2**
*Visual:* Whiteboard with two columns: “Central gating everything” vs “No central control”. Both columns have big red crosses.
**Emma:**
“We need a third path. Teams move on their own, inside guardrails enforced by the platform.”

---

### What Emma starts to see

**Panel 1**
*Visual:* Emma draws a box “Self-serve portal” connected to Conduktor.
**Emma:**
“Teams should request new topics or access through one place. Policies and patterns should attach automatically.”

**Panel 2**
*Visual:* She adds checks: encryption, masking, naming, retention.
**Emma:**
“Developers should feel they have power. At the same time the system keeps them inside safe boundaries without constant meetings.”

**Narration:**
Decentralization was not the enemy.
Unstructured decentralization was.

---

### Capabilities that unlock safe decentralization

**Narration (scroll):**

Her notebook gets a third list:

* Self-service for topics, ACLs, connectors, schemas
* Guardrails applied through policies
* Approval workflows where risk is high, automation where risk is low
* Per team access flows tied to identity systems
* Real time enforcement at a proxy layer

She labels it: **Step 3 – Safe Decentralization**.

---

### Outcomes (in-world)

**Panel 1**
*Visual:* Developer from the Cards team using Conduktor self-serve to create a new topic. UI shows policies applied by default.
**Developer:**
“I pick my domain, purpose, expected data. The rest is handled. Retention, naming, encryption, all come from the template.”

**Panel 2**
*Visual:* Emma looking at a dashboard of recent changes. Everything goes through controlled flows.
**Emma:**
“This is the first week I have not spent nights chasing surprise changes.”

**Panel 3**
*Visual:* Daniel in a sprint review.
**Daniel:**
“We cut lead time for Kafka changes from weeks to days. Without adding more people. We just stopped doing handcrafted work every time.”

**Narration:**
Autonomy and safety finally shared the same space.

---

### AE Discovery Prompts – Step 3

* How many Kafka related tickets hit the platform team each week at your account?
* Can developers create new streams or access by themselves today? Under which conditions?
* Have they had production issues caused by ad hoc changes or “manual fixes”?
* Do they have any controlled path for changes, or does each team follow its own pattern?

---

## STEP 4 – TURN STREAMS INTO TRUSTED DATA PRODUCTS

“What everyone wanted from streaming in the first place.”

### Challenge 1 – “Which stream is the real customer?”

**Panel 1**
*Visual:* AI team in a meeting room with Emma and Daniel.
**AI Lead:**
“We are building a real time customer scoring model. We need the main customer stream.”

**Panel 2**
*Visual:* Daniel with a laptop, showing a list of topics.
**Daniel:**
“We have `customer_events`, `customer_profile`, `cust_state`, some KYC topics… You can pick the one that fits best.”

**Panel 3**
*Visual:* AI Lead frowning.
**AI Lead:**
“Which one is correct? Which one has the right fields, the right semantics, the right freshness?”

**Narration:**
Northbridge no longer lacked streams.
Now they lacked trusted ones.

---

### Challenge 2 – “Silent schema change, loud incident”

**Panel 1**
*Visual:* Dashboard in red. A reporting pipeline failed.
**Data Engineer:**
“The job crashed last night. It suddenly got events with a new field and a missing old one.”

**Panel 2**
*Visual:* Emma on a call.
**Emma:**
“Who changed the schema?”

**Team Dev:**
“We added a field for a new feature. It worked in our tests.”

**Panel 3**
*Visual:* Daniel shows the old schema vs new one on screen.
**Daniel:**
“There was no contract preventing this type of change. So the system accepted it. The downstream job did not.”

---

### Challenge 3 – “Sensitive data in the wrong place”

**Panel 1**
*Visual:* Security team review.
**Security Analyst:**
“We saw partial card numbers in a topic used by a third party system. It is masked, yet that still raises flags.”

**Panel 2**
*Visual:* Emma zooming in on a stream path diagram.
**Emma:**
“We never tagged this field as sensitive at the stream level. It slipped through because no one had a holistic view of where that field flows.”

**Panel 3**
*Visual:* Security and Platform together.
**Security Lead:**
“We want teams to build with data. We just need guarantees that certain fields stay under strict rules anywhere they flow.”

---

### What Emma starts to see

**Panel 1**
*Visual:* Emma writes “Data Contracts” on the whiteboard.
**Emma:**
“Events need rules. Structure, meaning, and allowed changes must be explicit. That is how we stop breaking people downstream.”

**Panel 2**
*Visual:* She adds “PII tagging”, “masking”, “encryption”, “validation at the proxy”.
**Emma:**
“If we know which fields are sensitive and which rules apply, the platform can enforce it in motion instead of hoping each app remembers.”

**Panel 3**
*Visual:* She circles “Products”:
**Emma:**
“A ‘Customer Stream’ should be a product with a contract, owner, quality metrics. Not just a topic name people hope is correct.”

---

### Capabilities that turn streams into products

**Narration (scroll):**

Emma now writes her last list:

* Data contracts attached to streams
* Enforcement at write time
* PII tagging, masking, encryption rules that travel with the data
* A semantic firewall that validates events in motion
* Product level health: freshness, quality, SLAs
* Logical grouping of topics as one “Customer Product”, “Card Product”, etc

She writes at the top: **Step 4 – Streaming Data Products**.

---

### Outcomes (in-world)

**Panel 1**
*Visual:* Conduktor view showing “Customer 360 Streaming Product”. It lists domains, contracts, owners, SLAs.
**AI Lead:**
“This is what we needed. One product. One meaning. Known quality. We can plug this straight into the model.”

**Panel 2**
*Visual:* Data Engineer looking at a quality dashboard.
**Data Engineer:**
“If someone pushes an invalid payload or unsafe field, it gets caught at the edge. We see issues at write time, not three layers downstream.”

**Panel 3**
*Visual:* Emma and Daniel in a small celebration moment with coffee cups.
**Emma:**
“We did not just fix incidents. We raised the bar for what data streaming can do for the bank.”

**Narration:**
Streams became products.
Products created trust.
Trust enabled real progress on analytics and AI.

---

### AE Discovery Prompts – Step 4

* Do teams at your account know which stream to use as the “true” version of a given business entity?
* Have they had incidents caused by schema changes or semantic changes that were not communicated?
* How do they enforce PII and sensitivity rules across streams today?
* Do AI and analytics teams trust their streaming sources enough to rely on them for important workloads?

---

## FINAL SCROLL – OUTCOME

**Panel 1**
*Visual:* High level view of the 4 steps: Velocity, Clarity, Decentralization, Data Products, all under a Conduktor logo.
**Narration:**
Northbridge did not add more people or more clusters.
They added a clear journey.

**Panel 2**
*Visual:* Emma, Daniel, Security Lead, AI Lead, all in the same room, calmer.
**Narration:**
Conduktor gave them one control plane for their streaming data.
So they gained speed, clarity, safe autonomy, and trusted data products across every Kafka cluster.

**Panel 3**
*Visual:* Last panel, simple.
**Narration:**
Teams and agents now find the right data with the right context
and build with real confidence.
