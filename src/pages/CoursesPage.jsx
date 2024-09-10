import { useEffect, useState } from "react";
import VideoCard from "../components/card/VideoCard";
import { useMutation } from "react-query";
import axios from "axios";
import "./coursesPage.scss";
import { API_GET_COURSES } from "../config/url";
import { useAuth } from "../context/authContext";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const { token } = useAuth();
  const [Course, setSelectedCourse] = useState(null);

  const mutation = useMutation(
    () =>
      axios.get(API_GET_COURSES, {
        headers: { Authorization: "Bearer " + token },
        withCredentials: true,
        withXSRFToken: true,
      }),

    {
      onSuccess: (response) => {
        setCourses(response?.data);
        console.log(response);
      },
      onError: (error) => {
        console.error("Error al obtener los cursos", error);
      },
    }
  );

  console.log(token);
  useEffect(() => {
    if (token) {
      mutation.mutate();
    }
  }, [token]);

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="coursesPage">
      <div className="coursesGrid">
        {courses.map((course) => (
          <VideoCard
            key={course.id}
            title={course.title}
            videoUrl={course.video}
            onClick={() => handleSelectCourse(course)}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
