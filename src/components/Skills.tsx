import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  GitBranch, 
  Container, 
  Database, 
  Shield, 
  Settings,
  Monitor,
  Code2
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Azure", "GCP (Multi Cloud)", "Infrastructure as Code"],
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      title: "DevOps & CI/CD",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Azure Pipelines", "Jenkins", "GitHub Actions", "AWS CodeBuild", "SonarQube"],
      color: "bg-green-500/10 text-green-600 border-green-200"
    },
    {
      title: "Containerization & Orchestration",
      icon: <Container className="w-6 h-6" />,
      skills: ["Docker", "Kubernetes", "Azure ACS", "AWS ECS", "Docker Hub", "AWS ECR", "Azure ACR"],
      color: "bg-purple-500/10 text-purple-600 border-purple-200"
    },
    {
      title: "Infrastructure as Code",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Terraform", "Ansible", "Cloud CLI", "YAML", "ARM Templates"],
      color: "bg-orange-500/10 text-orange-600 border-orange-200"
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="w-6 h-6" />,
      skills: ["IAM Implementation", "MFA", "Encryption", "Network Security", "WAF", "SSL/TLS"],
      color: "bg-red-500/10 text-red-600 border-red-200"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL", "MySQL", "MSSQL", "MongoDB", "Neo4j", "Cassandra", "ClickHouse"],
      color: "bg-indigo-500/10 text-indigo-600 border-indigo-200"
    },
    {
      title: "Monitoring & Analytics",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["Apache Kafka", "Apache Spark", "Apache NiFi", "Apache Superset", "System Monitoring"],
      color: "bg-teal-500/10 text-teal-600 border-teal-200"
    },
    {
      title: "Scripting & Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Bash", "Python", "PowerShell", "YAML", "Git", "Linux", "Windows"],
      color: "bg-yellow-500/10 text-yellow-600 border-yellow-200"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skills across cloud platforms, DevOps tools, and modern infrastructure technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="text-xs px-2 py-1 bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Technologies Highlight */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Core Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'Terraform', 'Kubernetes', 'Docker', 'Jenkins', 'AWS', 'Azure', 'GCP',
              'Python', 'Bash', 'PostgreSQL', 'Apache Kafka', 'Nginx', 'Git'
            ].map((tech) => (
              <Badge 
                key={tech}
                className="px-4 py-2 text-sm bg-primary text-primary-foreground hover:bg-primary-hover transition-colors duration-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;