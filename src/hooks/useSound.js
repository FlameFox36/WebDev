import { useCallback } from 'react';

function useSound() {
  const playBeep = useCallback(() => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 880;
      gainNode.gain.value = 0.3;
      
      oscillator.start();
      gainNode.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 0.5);
      oscillator.stop(audioContext.currentTime + 0.5);
      
      setTimeout(() => {
        audioContext.close();
      }, 500);
    } catch (error) {
      console.log('Audio not supported');
    }
  }, []);
  
  const playGameOver = useCallback(() => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 440;
      gainNode.gain.value = 0.3;
      
      oscillator.start();
      gainNode.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 1);
      oscillator.stop(audioContext.currentTime + 1);
      
      setTimeout(() => {
        audioContext.close();
      }, 1000);
    } catch (error) {
      console.log('Audio not supported');
    }
  }, []);
  
  return { playBeep, playGameOver };
}

export default useSound;