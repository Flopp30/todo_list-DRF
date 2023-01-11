# Generated by Django 4.1.4 on 2023-01-11 18:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('todoapp', '0003_alter_todo_project'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='creator',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Creator'),
        ),
    ]
