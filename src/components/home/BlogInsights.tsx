import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    tag: "Psychology",
    title: "The Science Behind Lasting Attraction",
    excerpt: "Why initial chemistry is only 20% of long-term compatibility, and what truly matters.",
    date: "March 2026",
  },
  {
    tag: "Lifestyle",
    title: "Navigating Love as a High-Achiever",
    excerpt: "Balancing ambition with vulnerability—a guide for those who lead in every area of life.",
    date: "February 2026",
  },
  {
    tag: "Relationships",
    title: "The Art of the Second Date",
    excerpt: "How to move beyond surface-level conversation into genuine emotional connection.",
    date: "January 2026",
  },
];

const BlogInsights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto" style={{ maxWidth: "72rem", marginLeft: "auto", marginRight: "auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-rose-deep mb-4">Insights</p>
          <h2 className="heading-lg text-foreground">Relationship Intelligence</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group magnetic-hover p-8 rounded-2xl bg-card border border-border/50 hover:border-rose/30 transition-all duration-500 cursor-pointer"
            >
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-rose-deep">{post.tag}</span>
              <h3 className="font-serif text-xl font-semibold text-foreground mt-3 mb-3 group-hover:text-rose-deep transition-colors duration-300">
                {post.title}
              </h3>
              <p className="body-md text-muted-foreground mb-6">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-muted-foreground">{post.date}</span>
                <ArrowRight className="w-4 h-4 text-rose-deep opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogInsights;
