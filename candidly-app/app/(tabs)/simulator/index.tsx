import { useState } from 'react';
import { Audio } from 'expo-av';
import { Container, Header, Button } from '@/components';
import { Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { analyzeAudioMock } from '@/services/analysisService';

export default function SimulatorScreen() {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [feedback, setFeedback] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const startRecording = async () => {
    try {
      const permission = await Audio.requestPermissionsAsync();
      if (permission.status !== 'granted') {
        Alert.alert('Permiso denegado', 'Se necesita acceso al micrófono para grabar');
        return;
      }

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );

      setRecording(recording);
    } catch (err) {
      console.error('Error al iniciar grabación:', err);
    }
  };

  const stopRecording = async () => {
    try {
      if (!recording) return;
  
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      console.log('Audio grabado en:', uri);
  
      setRecording(null);
  
      setIsAnalyzing(true);
      setFeedback('');
  
      // Simular análisis REAL con servicio
      const analysisResult = await analyzeAudioMock(uri!);
  
      setIsAnalyzing(false);
      setFeedback(analysisResult);
    } catch (err) {
      console.error('Error al detener grabación:', err);
    }
  };

  const handleRecordPress = () => {
    if (recording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <Container>
      <Header title="Simulador de Conversaciones" />

      {isAnalyzing ? (
        <>
          <ActivityIndicator size="large" color="#4F8A8B" />
          <Text style={styles.analysisText}>Analizando tu conversación...</Text>
        </>
      ) : (
        <>
          <Text style={styles.instruction}>
            Graba el mensaje que quieres practicar
          </Text>

          <Button
            title={recording ? 'Detener Grabación' : 'Iniciar Grabación'}
            onPress={handleRecordPress}
          />

          {feedback ? (
            <Text style={styles.feedback}>
              {feedback}
            </Text>
          ) : null}
        </>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  instruction: {
    fontSize: 16,
    marginVertical: 16,
    color: '#333',
    textAlign: 'center',
  },
  feedback: {
    marginTop: 24,
    fontSize: 16,
    color: '#4F8A8B',
    textAlign: 'center',
  },
  analysisText: {
    marginTop: 24,
    fontSize: 18,
    color: '#4F8A8B',
    textAlign: 'center',
  },
});
