import * as Accordion from '@radix-ui/react-accordion';
import {PlusIcon, MinusIcon} from 'lucide-react'
import {kurewaSerif} from "@/styles/fonts/fonts";

function AccordionFAQ() {
    return (
        <Accordion.Root type="single" defaultValue="item-1" collapsible>
            <div className=" accordion-center">

                <Accordion.Item value="item-01">
                    <Accordion.Header>
                        <Accordion.Trigger className="question">
                            <span>Q1: <span className={kurewaSerif.className}>你會講中文嗎？可以跟台灣同事溝通嗎？</span></span>
                            <PlusIcon className="icon-open"/>
                            <MinusIcon className="icon-close"/>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="answer">
                        <span className={kurewaSerif.className}>會的，我會講中文, 在台灣這是必須的與台灣同事溝通並無困難, 我喜歡與人合作相處</span>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-02">
                    <Accordion.Header>
                        <Accordion.Trigger className="question">
                            <span>Q2: What aspect of development do you enjoy the most?</span>
                            <PlusIcon className="icon-open"/>
                            <MinusIcon className="icon-close"/>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="answer">
                        I find great satisfaction in learning new things, especially when faced with challenges. It is
                        during these difficult times that I learn the most
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-03">
                    <Accordion.Header>
                        <Accordion.Trigger className="question">
                            <span>Q3: <span className={kurewaSerif.className}>你在台灣待了多久了？</span></span>
                            <PlusIcon className="icon-open"/>
                            <MinusIcon className="icon-close"/>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="answer">
                        <span className={kurewaSerif.className}>我在台灣住了12年</span>
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-04">
                    <Accordion.Header>
                        <Accordion.Trigger className="question">
                            <span>Q4: Are you open to relocating to a different city for work?</span>
                            <PlusIcon className="icon-open"/>
                            <MinusIcon className="icon-close"/>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="answer">
                        Yes, I am willing to relocate to anywhere, and I am also available for extended
                        business trips.
                    </Accordion.Content>
                </Accordion.Item>


                <Accordion.Item value="item-05">
                    <Accordion.Header>
                        <Accordion.Trigger className="question">
                            <span>Q5: <span className={kurewaSerif.className}>你叫做William還是Bill啊？</span></span>
                            <PlusIcon className="icon-open"/>
                            <MinusIcon className="icon-close"/>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="answer">
                        <span className={kurewaSerif.className}>
                            這個問題通常很常見😄，我的朋友和熟人都叫我Bill，因為這是William的縮寫，請參考下面的連結 👉
                            <span>
                                 <a href="https://www.storm.mg/lifestyle/392943?page=1" target="_blank">
                                     關於英文名字的冷知識</a>
                            </span>

                        </span>

                    </Accordion.Content>
                </Accordion.Item>


                <Accordion.Item value="item-06">
                    <Accordion.Header>
                        <Accordion.Trigger className="question">
                            <span>Q6: Where do you find your project designs?</span>
                            <PlusIcon className=" icon-open"/>
                            <MinusIcon className=" icon-close"/>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="answer">
                        I usually source my designs from
                        <a href=" https://www.frontendmentor.io/" target="_blank">

                            FrontEndMentor</a>I like working with Figma
                        files because
                        they provide clear direction on sizes, typography, and color palette. This not only ensures
                        consistency but also allows me to learn various design patterns from the UI design system
                    </Accordion.Content>
                </Accordion.Item>


                <Accordion.Item value="item-07">
                    <Accordion.Header>
                        <Accordion.Trigger className="question">
                            <span>Q7: Where did you develop your coding skills?</span>
                            <PlusIcon className="icon-open"/>
                            <MinusIcon className="icon-close"/>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="answer">
                        I acquired my coding skills at university. Beginning with C++, I later transitioned to Python
                        for data science. However, I found a strong affinity for JavaScript and web development, which I
                        self-taught. Subsequently, I also delved into TypeScript.
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-08">
                    <Accordion.Header>
                        <Accordion.Trigger className="question">
                            <span>Q8: What are your long-term career aspirations?</span>
                            <PlusIcon className="icon-open"/>
                            <MinusIcon className="icon-close"/>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="answer">
                        I aim to become a full-stack developer, mastering backend server development,as well as learning
                        Solidity for blockchain solutions
                    </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-09">
                    <Accordion.Header>
                        <Accordion.Trigger className="question">
                            <span>Q9: Do you own the domain *.houseofthe.app?</span>
                            <PlusIcon className="icon-open"/>
                            <MinusIcon className="icon-close"/>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="answer">
                        Yes, indeed. It is my personal domain.
                    </Accordion.Content>
                </Accordion.Item>


            </div>
        </Accordion.Root>
    )
}

export default AccordionFAQ
