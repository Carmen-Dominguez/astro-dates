import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

export async function getPersonalityComparison(astrological: string, astronomical: string) {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: `You are an expert in zodiac signs. 
                    Provide direct, concise comparisons between signs without using introductory phrases like 'Sure!' or 'Certainly!'. 
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

export default openai;
