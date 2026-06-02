import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import styles from './BlogPost.module.css';

const articles = {
  'estres-laboral': {
    title: 'Cuando el estrés se convirtió en accidente laboral',
    date: '15 Mar 2025',
    author: 'Equipo LISSTOS',
    tag: 'Salud Mental · SST',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&auto=format&fit=crop&q=80',
    content: [
      { type: 'paragraph', text: 'El agotamiento emocional es un factor silencioso que afecta la productividad, la salud y la seguridad en las empresas. Lo que muchos consideran "solo estrés" puede convertirse en un riesgo laboral grave si no se aborda a tiempo.' },
      { type: 'heading', text: 'El caso que marcó un precedente' },
      { type: 'paragraph', text: 'Una reconocida multinacional con operaciones en Colombia enfrentó una situación crítica cuando uno de sus empleados más talentosos sufrió un colapso emocional durante una jornada laboral. Lo que comenzó como síntomas de agotamiento —insomnio, irritabilidad, falta de concentración— terminó en una incapacidad prolongada y un proceso de reestructuración profunda de toda el área de bienestar laboral.' },
      { type: 'paragraph', text: 'La compañía, que hasta entonces no contaba con políticas formales de salud mental, se vio obligada a repensar su enfoque. Contrataron una consultoría especializada —LISSTOS HSEQ S.A.S.— para diseñar e implementar un sistema integral de gestión de riesgos psicosociales.' },
      { type: 'blockquote', text: '"El estrés laboral no es un problema individual, es un fallo del sistema. Cuando las organizaciones entienden esto, empiezan a generar cambios reales."' },
      { type: 'heading', text: '¿Qué dice la normativa colombiana?' },
      { type: 'paragraph', text: 'La Resolución 2646 de 2008 establece la obligación de identificar, evaluar y controlar los factores de riesgo psicosocial en el trabajo. Sin embargo, muchas empresas aún no implementan estas disposiciones de manera efectiva.' },
      { type: 'paragraph', text: 'El Decreto 1072 de 2015, por su parte, integra la gestión de riesgos psicosociales dentro del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), lo que significa que no atender este aspecto puede generar incumplimientos legales graves.' },
      { type: 'heading', text: 'Recomendaciones prácticas' },
      { type: 'list', items: ['Realizar evaluaciones periódicas de riesgo psicosocial con instrumentos validados.', 'Implementar programas de prevención que incluyan pausas activas, manejo del estrés y canales de apoyo.', 'Capacitar a líderes y mandos medios para identificar señales tempranas de agotamiento.', 'Establecer canales confidenciales de reporte y acompañamiento.', 'Integrar la salud mental como un indicador dentro del SG-SST de la empresa.'] },
      { type: 'paragraph', text: 'La salud mental en el trabajo no es un lujo ni un beneficio opcional. Es un derecho y una responsabilidad compartida entre empleadores y trabajadores. En LISSTOS HSEQ S.A.S. te acompañamos en todo el proceso.' },
    ],
  },
  'cultura-sostenibilidad': {
    title: 'Cultura disruptiva como motor de la sostenibilidad',
    date: '28 Feb 2025',
    author: 'Equipo LISSTOS',
    tag: 'Cultura Organizacional · Sostenibilidad',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&auto=format&fit=crop&q=80',
    content: [
      { type: 'paragraph', text: 'La sostenibilidad empresarial ya no es una opción, es una necesidad estratégica. Pero ¿cómo lograrla cuando los modelos tradicionales se resisten al cambio? La respuesta está en la cultura organizacional.' },
      { type: 'heading', text: 'El caso Celsia: energía limpia, cultura renovada' },
      { type: 'paragraph', text: 'Celsia, la empresa de energía del Grupo Argos, emprendió hace algunos años una transformación profunda: pasar de ser una compañía tradicional de energía a un referente en sostenibilidad y energías limpias en Colombia. Pero el cambio tecnológico no fue suficiente —necesitaban transformar también su cultura.' },
      { type: 'paragraph', text: 'La compañía implementó un modelo de cultura disruptiva basado en cinco pilares: innovación abierta, liderazgo horizontal, propósito compartido, agilidad organizacional y medición de impacto. Los resultados hablan por sí solos: reducción significativa de emisiones, mayor compromiso de los colaboradores y reconocimiento internacional.' },
      { type: 'blockquote', text: '"La sostenibilidad no se logra solo con paneles solares. Se logra cuando cada persona en la organización entiende su rol en el propósito y actúa en consecuencia."' },
      { type: 'heading', text: 'Claves para construir una cultura sostenible' },
      { type: 'paragraph', text: 'Basados en nuestra experiencia acompañando procesos de transformación organizacional, en LISSTOS HSEQ S.A.S. identificamos estos factores críticos:' },
      { type: 'list', items: ['Propósito claro: la sostenibilidad debe estar en el ADN de la empresa, no ser un departamento aparte.', 'Liderazgo ejemplar: los directivos deben predicar con el ejemplo en prácticas sostenibles.', 'Formación continua: capacitar a todos los niveles en los principios de la sostenibilidad.', 'Medición y transparencia: lo que no se mide no se mejora. Publicar resultados genera confianza.', 'Participación: involucrar a todos los grupos de interés en la construcción de la estrategia.'] },
      { type: 'heading', text: 'El rol de la consultoría en sostenibilidad' },
      { type: 'paragraph', text: 'Las empresas que logran integrar la sostenibilidad en su cultura organizacional no solo cumplen con la normativa, sino que mejoran su competitividad, atraen talento y generan valor a largo plazo.' },
      { type: 'paragraph', text: 'En LISSTOS HSEQ S.A.S. te ayudamos a diseñar e implementar una hoja de ruta hacia la sostenibilidad empresarial, alineada con los estándares internacionales y adaptada a la realidad de tu organización.' },
    ],
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const article = articles[slug];

  if (!article) {
    return (
      <section className={styles.page}>
        <div className="container" style={{ textAlign: 'center', paddingTop: 120 }}>
          <h1>Artículo no encontrado</h1>
          <Link to="/blog" className={styles.backLink}>← Volver al blog</Link>
        </div>
      </section>
    );
  }

  return (
    <article className={styles.page}>
      <div className="container">
        <Link to="/blog" className={styles.backLink}>
          <ArrowLeft size={18} /> Volver al blog
        </Link>

        <div className={styles.article}>
          <div className={styles.meta}>
            <span><Calendar size={16} /> {article.date}</span>
            <span><User size={16} /> {article.author}</span>
            <span className={styles.tagLabel}><Tag size={16} /> {article.tag}</span>
          </div>

          <h1 className={styles.title}>{article.title}</h1>

          <img src={article.img} alt={article.title} className={styles.coverImg} />

          <div className={styles.content}>
            {article.content.map((block, i) => {
              if (block.type === 'paragraph') {
                return <p key={i} className={styles.paragraph}>{block.text}</p>;
              }
              if (block.type === 'heading') {
                return <h2 key={i} className={styles.heading}>{block.text}</h2>;
              }
              if (block.type === 'blockquote') {
                return <blockquote key={i} className={styles.blockquote}>{block.text}</blockquote>;
              }
              if (block.type === 'list') {
                return (
                  <ul key={i} className={styles.list}>
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>

          <div className={styles.share}>
            <span>Compartir este artículo:</span>
            <button className={styles.shareBtn} aria-label="Compartir">
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
