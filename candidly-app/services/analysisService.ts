// services/analysisService.ts

export async function analyzeAudioMock(audioUri: string): Promise<string> {
    console.log('Simulando envío de audio al servidor:', audioUri);
  
    return new Promise((resolve) => {
      setTimeout(() => {
        const fakeResponses = [
          '✅ Tu comunicación fue clara, ¡bien hecho!',
          '⚠️ Tu tono fue algo tenso, intenta sonar más tranquilo.',
          '✅ Excelente entonación, sigue así.',
          '⚠️ Evita usar expresiones negativas como "siempre", "nunca".',
        ];
  
        const randomIndex = Math.floor(Math.random() * fakeResponses.length);
        resolve(fakeResponses[randomIndex]);
      }, 3000);
    });
  }
  