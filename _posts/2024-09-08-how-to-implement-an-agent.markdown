---
layout: single
title:  "How to design and implement an AI agent"
date:   2024-09-08 15:41:20 +0800
categories:
  - CS
  - RA
  - AI
tags:
  - OpenAI
  - Zilliz
---
### How to design and implement an AI agent for beginners?
This blog is mainly for **beginners** about **AI agents**. **AI agents** are LLMs (large language models) that can **perform tasks on their own**. For example, call a calculator to calculate or search for answers in data bases, in order to **avoid hallucination**. Here we will go through **key conponents of agents**, **how to design agents' framework**, and **how to implement an agent**.

#### 1. Agents' Key Conponents
Three parts
- **Plan**: plan how to perform the task
- **Memory**: memorize previous events, reflect and improve
- **Tools**: tools for performing the tasks

#### 2. Agents' Framework Design
0. Determine what kind of tasks your agent is for, i.e. look up for information and have **a final picture** of what your agent will look like.
1. Based on the final picture, you come up with what **tools** your agent will need. For example, data bases, calculator, weather website API, etc.
2. Design your agent's workflow, i.e. the sequence of **plan**, **perform tasks**, **memorize**, **reflect** and so on.
3. Design the **prompts** for each execution. (Just skrechy for now, later when coding you will need to adjust your prompts according to your agents' performance)
4. Draw out the framework. Review and better it.

#### 3. Agents' Code
Now it finally comes to coding! **Make sure your code have one-to-one correspondence to your framework.** This ensures that it is either your framework or your code goes wrong if your agent doesn't work as expected.

Actually, coding is relatively easy. What deserves your attention is **framework desiging** and **prompt engineering**.

> **Note**:
> - **Prompt Engineering**: 
>   - Make your **prompt** crystal and clear
>   - Restrict LLMs' output **format**
>   - Provide **examples**
> - **Framework Design**
>   - Highlight your agent's **strength**
>   - Draw good **workflow chart**

#### 4. Example Framework and Code
This is my first agent for Chinese laws consultation.

![agent-demo](/images/agent-demo.png)

{% highlight python %}
# Chat
def chat_without_reference(question, chat_history)
def chat_with_reference(question, chat_history)

# Judge
def judge_funtion(question, chat_history, reference_text)

# Reflect
def reflect(question, chat_history, answer)

# Execute
def law_provision_inquiry(question, chat_history, reference_text)
def write_letter(question, chat_history, reference_text)
def check_contract(question, chat_history, reference_text)
def calculate_number(question, chat_history, reference_text)

# Memorize
def get_chat_history()
def append_chat_history(question, answer, chat_history)
def store_chat_history()

# Plan
def plan(question, chat_history)
{% endhighlight %}

Now it is done! Have fun with your first agent!
