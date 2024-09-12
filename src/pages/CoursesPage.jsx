import { useEffect, useState } from "react";
import VideoCard from "../components/card/VideoCard";
import { useMutation } from "react-query";
import axios from "axios";
import "./coursesPage.scss";
import { API_GET_COURSES } from "../config/url";
import { useAuth } from "../context/authContext";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  const { token, userRole } = useAuth();
  const isAdmin = userRole?.includes("ROLE_ADMIN");

  const mutation = useMutation(
    () =>
      axios.get(API_GET_COURSES, {
        headers: { Authorization: "Bearer " + token },
        withCredentials: true,
      }),
    {
      onSuccess: (response) => {
        if (Array.isArray(response?.data)) {
          setCourses(response.data);
        }
      },
      onError: (error) => {
        console.error("Error al obtener los cursos", error);
      },
    }
  );


  const deleteMutation = useMutation(
    (courseId) =>
      axios.delete(`${API_GET_COURSES}/${courseId}`, {
        headers: { Authorization: "Bearer " + token },
      }),
    {
      onSuccess: () => {
        mutation.mutate();
      },
      onError: (error) => {
        console.error("Error al eliminar el curso", error);
      },
    }
  );

  useEffect(() => {
    if (token) {
      mutation.mutate();
    }
  }, [token]);


  const handleEditCourse = (id, updatedCourse) => {
    axios
      .put(`${API_GET_COURSES}/${id}`, updatedCourse, {
        headers: { Authorization: "Bearer " + token },
      })
      .then(() => {
        mutation.mutate();
      })
      .catch((error) => {
        console.error("Error al actualizar el curso", error);
      });
  };

  const handleDeleteCourse = (id) => {
    deleteMutation.mutate(id);
  };

  return (
    <div className="coursesPage">
      <div className="coursesGrid">
        {courses.map((course) => (
          <VideoCard
            key={course.id}
            id={course.id}
            title={course.title}
            videoUrl={course.video}
            description={course.description}
            isAdmin={isAdmin}
            onEdit={handleEditCourse}
            onDelete={handleDeleteCourse}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
