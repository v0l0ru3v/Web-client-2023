// src/App.tsx
import React, { useState } from 'react';
import { Document, Page, Text, Image, PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  section: {
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
});

interface MyDocumentProps {
  text: string;
  image: string | null;
}

const MyDocument: React.FC<MyDocumentProps> = ({ text, image }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.text}>{text}</Text>
      {image && <Image style={styles.image} src={image} />}
    </Page>
  </Document>
);

const App: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>Форма для генерации PDF</h1>
      <form>
        <div>
          <label>Введите текст:</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <label>Загрузите изображение:</label>
          <input type="file" accept="image/png, image/jpeg" onChange={handleImageUpload} />
        </div>
      </form>
      <PDFDownloadLink
        document={<MyDocument text={text} image={image} />}
        fileName="document.pdf"
      >
        {({ loading }) => (loading ? 'Создание PDF...' : 'Скачать PDF')}
      </PDFDownloadLink>
    </div>
  );
};

export default App;
