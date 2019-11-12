import { BaseCommand } from '@adonisjs/ace'

export default class Sample extends BaseCommand {
  public static commandName = 'sample'
  public static description = 'I am a sample command'

  public async handle () {
    this.logger.info('Hello')
  }
}
