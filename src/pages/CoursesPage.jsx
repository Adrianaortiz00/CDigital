import { useEffect, useState } from "react";
import VideoCard from "../components/card/VideoCard";
import { useMutation } from "react-query";
import axios from "axios";
import "./coursesPage.scss";
import { API_GET_COURSES } from "../config/url";
import { useAuth } from "../context/authContext";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const { token, userId } = useAuth(); // Verificar el rol del usuario
  console.log("UserId:", userId);
console.log("Roles:", userId?.roles);
  const [editingCourseId, setEditingCourseId] = useState(null);
  console.log("User Roles:", userId?.roles);


  // Mutación para obtener los cursos
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
        } else {
          console.error("La respuesta de la API no es un array", response?.data);
        }
      },
      onError: (error) => {
        console.error("Error al obtener los cursos", error);
      },
    }
  );

  useEffect(() => {
    if (token) {
      console.log("Iniciando mutación para obtener cursos...");
      mutation.mutate();
    }
  }, [token]);

  // Función para manejar la edición del curso
  const handleEditCourse = (id, updatedCourse) => {
    axios
      .put(`${API_GET_COURSES}/${id}`, updatedCourse, {
        headers: { Authorization: "Bearer " + token },
      })
      .then(() => {
        setEditingCourseId(null); // Salir del modo de edición
        mutation.mutate(); // Refrescar la lista de cursos
      })
      .catch((error) => {
        console.error("Error al actualizar el curso", error);
      });
  };

  // Verificar si el usuario tiene el rol de administrador
  const isAdmin = userId?.roles?.includes("ADMIN");

  return (
    <div className="coursesPage">
      <div className="coursesGrid">
        {courses.map((course) => (
          <VideoCard
            key={course.id}
            title={course.title}
            videoUrl={course.video}
            description={course.description}
            isAdmin={isAdmin} // Pasar el rol de admin al componente VideoCard
            onEdit={isAdmin ? (updatedCourse) => handleEditCourse(course.id, updatedCourse) : null} // Solo pasar onEdit si es admin
          />
        ))}
      </div>
    </div>
  );
};


export default CoursesPage;
