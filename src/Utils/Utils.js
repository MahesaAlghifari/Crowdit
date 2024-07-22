// utils.js
export function splitTextByWordCount(text, wordsPerParagraph = 50) {
    const words = text.split(' ');
    const paragraphs = [];
  
    for (let i = 0; i < words.length; i += wordsPerParagraph) {
      paragraphs.push(words.slice(i, i + wordsPerParagraph).join(' '));
    }
  
    return paragraphs;
  }
  