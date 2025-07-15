import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
}) as OpenAI;

export async function getPersonalityComparison(astrological: string, astronomical: string) {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: `You are an expert in zodiac signs. 
                    Provide direct, accurate, concise comparisons between signs without using introductory phrases like 'Sure!' or 'Certainly!'. 
                    Focus on element, personality traits and characteristics. 
                    Start with similarities then differences.`
                },
                {
                    role: "user",
                    content: `Compare the personality traits of ${astrological} (astrological sign) with ${astronomical} (astronomical sign). 
                    Start directly with the comparison.`
                }
            ],
            max_tokens: 250
        });

        return completion.choices[0].message.content;
    } catch (error) {
        console.error('Error fetching personality comparison:', error);
        return "Unable to generate personality comparison at this time.";
    }
}

export async function getDetailedComparison(astrological: string, astronomical: string): Promise<string> {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    role: "system",
                    content: `Create an accurate, structured, detailed comparison between zodiac signs. 
                    Include sections: Introduction with each Sign Element and Ruling Planet and Modality, 
                    Traditional Sign Analysis, 
                    Astronomical Sign Analysis, 
                    Unique Combination Insights, and Conclusion.
                    `
                },
                {
                    role: "user",
                    content: `Create a detailed comparison between ${astrological} (traditional) and ${astronomical} (astronomical). Format in clear sections with headers.`
                }
            ],
            max_tokens: 750
        });

        return completion.choices[0].message.content || '';
    } catch (error) {
        console.error('Error generating detailed comparison:', error);
        return "Unable to generate detailed comparison at this time.";
    }
}

export interface TarotCardInfo {
    name: string;
    suit: string;
    meaning: string;
    reversed: boolean;
}

export async function getDetailedTarotReading(question: string, cards: TarotCardInfo[]): Promise<string> {
    try {
        const cardDescriptions = cards.map(card =>
            `${card.name} (${card.suit}) - ${card.meaning}${card.reversed ? ' [Reversed]' : ''}`
        ).join('\n');

        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    role: "system",
                    content: `You are a master tarot reader. 
                    Provide a detailed, insightful, and empathetic interpretation of tarot spreads with light humor when the question is light-hearted. 
                    Consider the user's question and the meaning of each card, including if it is reversed. 
                    Avoid generic or overly positive statements. 
                    Structure the response with an Overall Message, then a section for each card, and a Conclusion. 
                    At the start of the response have a TLDR section that is a summary of the reading in 1-2 sentences. 
                    The reading must be completed within the max_completion_tokens (400) limit or 350 words.`
                },
                {
                    role: "user",
                    content: `Question: ${question}\n\nCards Drawn:\n${cardDescriptions}\n\nPlease provide a detailed tarot reading interpretation.`
                }
            ],
            max_completion_tokens: 400
        });

        return completion.choices[0].message.content || '';
    } catch (error) {
        console.error('Error generating detailed tarot reading:', error);
        return "Unable to generate tarot reading at this time.";
    }
}

export default openai;
