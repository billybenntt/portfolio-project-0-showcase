import * as Accordion from '@radix-ui/react-accordion';

function AccordionComponent() {
    return (
        <Accordion.Root type="single" defaultValue="item-1" collapsible>
            <Accordion.Item value="item-1">
                <Accordion.Header>
                    <Accordion.Trigger>Question 1</Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                    Answer 1
                </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-2">
                <Accordion.Header>
                    <Accordion.Trigger>Question 2</Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                    Answer 2
                </Accordion.Content>
            </Accordion.Item>

        </Accordion.Root>
    )
}

export default AccordionComponent
