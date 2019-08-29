import { Ignitor } from '@adonisjs/core/build/src/Ignitor';
import 'reflect-metadata';

new Ignitor(__dirname).startHttpServer().catch(console.error);
