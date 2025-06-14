import { useEffect, useState } from "react";
import AppHeader from "./components/app-header.component";
import SearchComponent from "./components/search.component";
import TopicPieChart from "./components/topic-pie-chart.component";

type Topic = { الموضوع: string; ايجابي: string; سلبي: string; محايد: string };

function App() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  useEffect(() => {
    fetch("/topics.json") // ✅ correct path
      .then((res) => res.json())
      .then((data) => {
        setTopics(data.topics); // assuming your JSON is { "topics": [ ... ] }
      })
      .catch((err) => console.error("Failed to fetch topics:", err));
  }, []);

  const handleSearch = (value: string) => {
    const found = topics.find((t) => t.الموضوع.includes(value));
    setSelectedTopic(found || null);
  };

  return (
    <div className="w-100">
      <AppHeader title="فهم الرأي العام من خلال تجميع المستخدمين"></AppHeader>
      <SearchComponent onSearch={handleSearch}></SearchComponent>
      <TopicPieChart topicData={selectedTopic}></TopicPieChart>
    </div>
  );
}

export default App;
