import React, { useRef, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Greeting from "../components/HomePageComponents/Greeting";
import Tasks from "../components/HomePageComponents/Tasks";
import MoodTracker from "../components/HomePageComponents/MoodLog";
import GroupTherapyHighlights from "../components/HomePageComponents/GroupTherapyHighlights";
import WeeklyReportPreview from "../components/HomePageComponents/WeeklyReport";
import SleepTrackingAndTips from "../components/HomePageComponents/SleepTrackingAndTips";
import GoalsAndProgress from "../components/HomePageComponents/GoalsAndProgress";
import SurveysPreview from "../components/HomePageComponents/SurveyPreview";
import StoriesPreview from "../components/HomePageComponents/StoriesPreview";
import LibraryPreview from "../components/HomePageComponents/Library";
import { useHomeScroll } from "../utils/homeScrollContext";
import { useTheme } from "../utils/themeContext";

export default function HomePage() {
  const scrollViewRef = useRef(null);
  const hasScrolledToSavedPosition = useRef(false);
  const { homeScrollY, setHomeScrollY } = useHomeScroll();
  const { theme } = useTheme();

  useEffect(() => {
    if (!hasScrolledToSavedPosition.current && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: homeScrollY, animated: false });
      hasScrolledToSavedPosition.current = true;
    }
  }, [homeScrollY]);

  const handleScroll = (event) => {
    const currentY = event.nativeEvent.contentOffset.y;
    if (hasScrolledToSavedPosition.current) {
      setHomeScrollY(currentY);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundLight }]}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <StoriesPreview />
        <Greeting />
        <Tasks />
        <MoodTracker />
        <GroupTherapyHighlights />
        <WeeklyReportPreview />
        <SleepTrackingAndTips />
        <GoalsAndProgress />
        <SurveysPreview />
        <LibraryPreview />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
