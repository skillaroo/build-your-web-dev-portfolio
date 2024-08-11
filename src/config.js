import fs from 'fs';
import yaml from 'js-yaml';
import { z } from 'zod';

// Define the Zod schema
const ButtonSchema = z.object({
  text: z.string(),
  link: z.string().url(),
});

const MainSchema = z.object({
  headings: z.array(z.string()),
  paragraphs: z.array(z.string()),
  button: ButtonSchema,
});

const AboutSchema = z.object({
  title: z.string(),
  paragraphs: z.array(z.string()),
});

const GetInTouchSchema = z.object({
  title: z.string(),
  paragraphs: z.array(z.string()),
  button: ButtonSchema,
});

const SocialsSchema = z.object({
  twitter: z.string().url(),
  github: z.string().url(),
  linkedin: z.string().url(),
});

const SiteConfigSchema = z.object({
  site_title: z.string(),
  site_description: z.string(),
  email: z.string().email(),
  socials: SocialsSchema,
  main: MainSchema,
  about: AboutSchema,
  get_in_touch: GetInTouchSchema,
});

export const parseSiteConfig = () => {
  try {
    const filePath = "./src/assets/site-config.yaml";
    // Read the YAML file
    const yamlContent = fs.readFileSync(filePath, 'utf8');

    // Parse the YAML content to a JavaScript object
    const jsonData = yaml.load(yamlContent);

    // Validate the parsed data against the schema
    const validatedData = SiteConfigSchema.parse(jsonData);

    // Return the validated data
    return validatedData;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Validation error:', error.errors);
    } else {
      console.error('Error parsing YAML file:', error);
    }
    throw error;
  }
}