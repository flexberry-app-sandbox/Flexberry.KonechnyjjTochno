﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.KonechnyjjTochno
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Основ показат.
    /// </summary>
    // *** Start programmer edit section *** (ОсновПоказат CustomAttributes)

    // *** End programmer edit section *** (ОсновПоказат CustomAttributes)
    [AutoAltered()]
    [Caption("Основ показат")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОсновПоказатE", new string[] {
            "ВыручкаОбщ as \'Выручка общ\'",
            "Заолняемость as \'Заолняемость\'",
            "СрЦена as \'Ср цена\'",
            "ВыручЗаОдинН as \'Выруч за один Н\'",
            "ВыручЗаГостя as \'Выруч за гостя\'",
            "СрКолвоГостВНо as \'Ср колво гост в но\'"})]
    [View("ОсновПоказатL", new string[] {
            "ВыручкаОбщ as \'Выручка общ\'",
            "Заолняемость as \'Заолняемость\'",
            "СрЦена as \'Ср цена\'",
            "ВыручЗаОдинН as \'Выруч за один Н\'",
            "ВыручЗаГостя as \'Выруч за гостя\'",
            "СрКолвоГостВНо as \'Ср колво гост в но\'"})]
    public class ОсновПоказат : ICSSoft.STORMNET.DataObject
    {
        
        private int fВыручкаОбщ;
        
        private int fЗаолняемость;
        
        private int fСрЦена;
        
        private int fВыручЗаОдинН;
        
        private int fВыручЗаГостя;
        
        private int fСрКолвоГостВНо;
        
        private IIS.KonechnyjjTochno.Маркетолог fМаркетолог;
        
        // *** Start programmer edit section *** (ОсновПоказат CustomMembers)

        // *** End programmer edit section *** (ОсновПоказат CustomMembers)

        
        /// <summary>
        /// ВыручЗаГостя.
        /// </summary>
        // *** Start programmer edit section *** (ОсновПоказат.ВыручЗаГостя CustomAttributes)

        // *** End programmer edit section *** (ОсновПоказат.ВыручЗаГостя CustomAttributes)
        public virtual int ВыручЗаГостя
        {
            get
            {
                // *** Start programmer edit section *** (ОсновПоказат.ВыручЗаГостя Get start)

                // *** End programmer edit section *** (ОсновПоказат.ВыручЗаГостя Get start)
                int result = this.fВыручЗаГостя;
                // *** Start programmer edit section *** (ОсновПоказат.ВыручЗаГостя Get end)

                // *** End programmer edit section *** (ОсновПоказат.ВыручЗаГостя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОсновПоказат.ВыручЗаГостя Set start)

                // *** End programmer edit section *** (ОсновПоказат.ВыручЗаГостя Set start)
                this.fВыручЗаГостя = value;
                // *** Start programmer edit section *** (ОсновПоказат.ВыручЗаГостя Set end)

                // *** End programmer edit section *** (ОсновПоказат.ВыручЗаГостя Set end)
            }
        }
        
        /// <summary>
        /// ВыручЗаОдинН.
        /// </summary>
        // *** Start programmer edit section *** (ОсновПоказат.ВыручЗаОдинН CustomAttributes)

        // *** End programmer edit section *** (ОсновПоказат.ВыручЗаОдинН CustomAttributes)
        public virtual int ВыручЗаОдинН
        {
            get
            {
                // *** Start programmer edit section *** (ОсновПоказат.ВыручЗаОдинН Get start)

                // *** End programmer edit section *** (ОсновПоказат.ВыручЗаОдинН Get start)
                int result = this.fВыручЗаОдинН;
                // *** Start programmer edit section *** (ОсновПоказат.ВыручЗаОдинН Get end)

                // *** End programmer edit section *** (ОсновПоказат.ВыручЗаОдинН Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОсновПоказат.ВыручЗаОдинН Set start)

                // *** End programmer edit section *** (ОсновПоказат.ВыручЗаОдинН Set start)
                this.fВыручЗаОдинН = value;
                // *** Start programmer edit section *** (ОсновПоказат.ВыручЗаОдинН Set end)

                // *** End programmer edit section *** (ОсновПоказат.ВыручЗаОдинН Set end)
            }
        }
        
        /// <summary>
        /// ВыручкаОбщ.
        /// </summary>
        // *** Start programmer edit section *** (ОсновПоказат.ВыручкаОбщ CustomAttributes)

        // *** End programmer edit section *** (ОсновПоказат.ВыручкаОбщ CustomAttributes)
        public virtual int ВыручкаОбщ
        {
            get
            {
                // *** Start programmer edit section *** (ОсновПоказат.ВыручкаОбщ Get start)

                // *** End programmer edit section *** (ОсновПоказат.ВыручкаОбщ Get start)
                int result = this.fВыручкаОбщ;
                // *** Start programmer edit section *** (ОсновПоказат.ВыручкаОбщ Get end)

                // *** End programmer edit section *** (ОсновПоказат.ВыручкаОбщ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОсновПоказат.ВыручкаОбщ Set start)

                // *** End programmer edit section *** (ОсновПоказат.ВыручкаОбщ Set start)
                this.fВыручкаОбщ = value;
                // *** Start programmer edit section *** (ОсновПоказат.ВыручкаОбщ Set end)

                // *** End programmer edit section *** (ОсновПоказат.ВыручкаОбщ Set end)
            }
        }
        
        /// <summary>
        /// Заолняемость.
        /// </summary>
        // *** Start programmer edit section *** (ОсновПоказат.Заолняемость CustomAttributes)

        // *** End programmer edit section *** (ОсновПоказат.Заолняемость CustomAttributes)
        public virtual int Заолняемость
        {
            get
            {
                // *** Start programmer edit section *** (ОсновПоказат.Заолняемость Get start)

                // *** End programmer edit section *** (ОсновПоказат.Заолняемость Get start)
                int result = this.fЗаолняемость;
                // *** Start programmer edit section *** (ОсновПоказат.Заолняемость Get end)

                // *** End programmer edit section *** (ОсновПоказат.Заолняемость Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОсновПоказат.Заолняемость Set start)

                // *** End programmer edit section *** (ОсновПоказат.Заолняемость Set start)
                this.fЗаолняемость = value;
                // *** Start programmer edit section *** (ОсновПоказат.Заолняемость Set end)

                // *** End programmer edit section *** (ОсновПоказат.Заолняемость Set end)
            }
        }
        
        /// <summary>
        /// СрКолвоГостВНо.
        /// </summary>
        // *** Start programmer edit section *** (ОсновПоказат.СрКолвоГостВНо CustomAttributes)

        // *** End programmer edit section *** (ОсновПоказат.СрКолвоГостВНо CustomAttributes)
        public virtual int СрКолвоГостВНо
        {
            get
            {
                // *** Start programmer edit section *** (ОсновПоказат.СрКолвоГостВНо Get start)

                // *** End programmer edit section *** (ОсновПоказат.СрКолвоГостВНо Get start)
                int result = this.fСрКолвоГостВНо;
                // *** Start programmer edit section *** (ОсновПоказат.СрКолвоГостВНо Get end)

                // *** End programmer edit section *** (ОсновПоказат.СрКолвоГостВНо Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОсновПоказат.СрКолвоГостВНо Set start)

                // *** End programmer edit section *** (ОсновПоказат.СрКолвоГостВНо Set start)
                this.fСрКолвоГостВНо = value;
                // *** Start programmer edit section *** (ОсновПоказат.СрКолвоГостВНо Set end)

                // *** End programmer edit section *** (ОсновПоказат.СрКолвоГостВНо Set end)
            }
        }
        
        /// <summary>
        /// СрЦена.
        /// </summary>
        // *** Start programmer edit section *** (ОсновПоказат.СрЦена CustomAttributes)

        // *** End programmer edit section *** (ОсновПоказат.СрЦена CustomAttributes)
        public virtual int СрЦена
        {
            get
            {
                // *** Start programmer edit section *** (ОсновПоказат.СрЦена Get start)

                // *** End programmer edit section *** (ОсновПоказат.СрЦена Get start)
                int result = this.fСрЦена;
                // *** Start programmer edit section *** (ОсновПоказат.СрЦена Get end)

                // *** End programmer edit section *** (ОсновПоказат.СрЦена Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОсновПоказат.СрЦена Set start)

                // *** End programmer edit section *** (ОсновПоказат.СрЦена Set start)
                this.fСрЦена = value;
                // *** Start programmer edit section *** (ОсновПоказат.СрЦена Set end)

                // *** End programmer edit section *** (ОсновПоказат.СрЦена Set end)
            }
        }
        
        /// <summary>
        /// Основ показат.
        /// </summary>
        // *** Start programmer edit section *** (ОсновПоказат.Маркетолог CustomAttributes)

        // *** End programmer edit section *** (ОсновПоказат.Маркетолог CustomAttributes)
        [PropertyStorage(new string[] {
                "Маркетолог"})]
        [NotNull()]
        public virtual IIS.KonechnyjjTochno.Маркетолог Маркетолог
        {
            get
            {
                // *** Start programmer edit section *** (ОсновПоказат.Маркетолог Get start)

                // *** End programmer edit section *** (ОсновПоказат.Маркетолог Get start)
                IIS.KonechnyjjTochno.Маркетолог result = this.fМаркетолог;
                // *** Start programmer edit section *** (ОсновПоказат.Маркетолог Get end)

                // *** End programmer edit section *** (ОсновПоказат.Маркетолог Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОсновПоказат.Маркетолог Set start)

                // *** End programmer edit section *** (ОсновПоказат.Маркетолог Set start)
                this.fМаркетолог = value;
                // *** Start programmer edit section *** (ОсновПоказат.Маркетолог Set end)

                // *** End programmer edit section *** (ОсновПоказат.Маркетолог Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОсновПоказатE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОсновПоказатE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОсновПоказатE", typeof(IIS.KonechnyjjTochno.ОсновПоказат));
                }
            }
            
            /// <summary>
            /// "ОсновПоказатL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОсновПоказатL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОсновПоказатL", typeof(IIS.KonechnyjjTochno.ОсновПоказат));
                }
            }
        }
    }
}
