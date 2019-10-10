export class Content {
  private _paragraphs :string[];
  public get paragraphs() :string[] { return this._paragraphs; }
  constructor() {
    this._paragraphs = [`
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam 
      interdum placerat ligula eu consectetur. Vivamus bibendum 
      bibendum euismod. Aliquam erat volutpat. Morbi sodales diam 
      consequat viverra volutpat. Interdum et malesuada fames ac ante 
      ipsum primis in faucibus. Sed ornare libero id neque ultricies 
      scelerisque in at arcu. Ut sit amet dolor sed turpis sagittis 
      bibendum. Morbi tellus felis, aliquam sed aliquam quis, pharetra 
      sed lectus. Nam eget risus quis odio pharetra tempor. Nullam 
      augue justo, tempor volutpat ex id, blandit placerat lorem. 
      Suspendisse ut sem a magna ultricies varius id ut est. Curabitur 
      fermentum porta convallis. Ut ac nibh vitae turpis interdum 
      viverra. Morbi nisl sem, vestibulum dignissim pellentesque ac, 
      rhoncus vel magna. Proin accumsan magna non arcu porttitor, a 
      aliquam ex fringilla.
    `,
    `
      Mauris vestibulum, tellus nec cursus sollicitudin, velit libero 
      aliquam velit, commodo finibus neque neque eu risus. Vivamus 
      semper fermentum dui at eleifend. Nunc lacinia ac sem quis 
      ultrices. Quisque a mollis tellus. Duis tempor justo risus, 
      facilisis accumsan nunc dignissim quis. Donec ultricies libero 
      sit amet erat facilisis mattis. Aliquam fermentum malesuada 
      lacus, eu consequat dolor. Suspendisse pharetra pellentesque 
      purus sit amet accumsan. Sed eget euismod erat. Nam sagittis 
      nulla nisi, in vulputate nibh tincidunt ac. Nam non eleifend 
      erat. Morbi pellentesque mi vitae sagittis viverra. Proin 
      sagittis interdum ornare. Pellentesque aliquet interdum quam, 
      id tincidunt sem maximus ac.    
    `,
    `
      Nullam eu molestie nunc. Vestibulum dapibus pretium arcu, quis 
      suscipit augue commodo cursus. Integer consequat vitae tortor 
      ornare facilisis. Nullam eu faucibus erat. Suspendisse at erat 
      nec mauris ullamcorper iaculis. Donec maximus ipsum elit, et 
      dapibus magna facilisis in. In convallis quam non auctor 
      ultrices. Sed sit amet purus varius, tincidunt nibh sed, rhoncus mi.
    `,
    `
      Integer dictum sapien ipsum, eleifend euismod mi venenatis at. 
      Etiam volutpat metus nec dignissim tincidunt. Ut placerat neque vel 
      velit commodo rutrum. Donec volutpat felis erat, eget pulvinar sapien 
      dapibus sed. Donec vitae risus at purus interdum maximus sed sed 
      turpis. Donec sagittis viverra mollis. Maecenas varius leo neque, 
      at suscipit velit vulputate sed. Fusce rutrum dui sit amet condimentum 
      egestas. Pellentesque luctus enim augue, sit amet fermentum massa 
      efficitur in.
    `,
    `
      Vestibulum lobortis at nulla vitae porta. Sed pellentesque 
      aliquet imperdiet. Ut eu est suscipit, condimentum ligula quis, 
      imperdiet augue. Nunc eget tortor eget dui tempus efficitur in 
      ut lorem. Etiam iaculis felis rhoncus dolor ultrices, eu mollis 
      massa feugiat. Donec aliquet elit ligula, vitae consectetur 
      tellus aliquet in. Suspendisse potenti. Ut luctus, elit eu porta 
      porttitor, sapien velit viverra nisi, id imperdiet leo dolor 
      sit amet urna. Cras ex diam, pretium a porta nec, faucibus vel 
      mauris. Etiam non pretium sapien. Duis malesuada, est eget 
      interdum vehicula, sapien sem egestas libero, ut laoreet neque 
      diam vel nunc.
    `
    ];
  }
}