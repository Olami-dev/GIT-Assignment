import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.greeting}>Hello there,</Text>
        
        <Text style={styles.bodyText}>
          My name is <Text style={styles.highlight}>Olanipekun Olamilekan</Text>, 
          with matric number <Text style={styles.highlight}>RUN/IFT/13199</Text>.
        </Text>

        <Text style={styles.bodyText}>
          A Final-year student in the department of <Text style={styles.italic}>Information Technology</Text>, 
          faculty of <Text style={styles.italic}>Computing and Digital Technologies</Text>.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  bodyText: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    color: '#34495e',
    marginBottom: 10,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#2980b9',
  },
  italic: {
    fontStyle: 'italic',
    color: '#16a085',
  },
});
